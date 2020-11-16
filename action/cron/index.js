const cron = require("node-cron");
const { promises } = require("fs");
const { join } = require("path");
const { Markup } = require("telegraf");
const { composer, middleware, bot } = require("../../core/bot");

const env = require("../../core/env");
const consoles = require("../../layouts/consoles");
const identifier = require("./identifier");
const parser = require("../../timetable/parse");

(async () => {
	const dir = await promises.readdir("./timetable");
	const groupIdentifier = dir.filter((name) => name.endsWith(".json"));
	const groups = await Promise.all(
		groupIdentifier.map(async (name) => {
			const file = await promises.readFile(join("./timetable", name), {
				encoding: "utf8",
			});
			return {
				name: name.replace(".json", ""),
				data: {
					...JSON.parse(file),
				},
			};
		})
	);
	for (let group of groups) {
		for (let day of Object.keys(group["data"])) {
			for (let subject of group["data"][day]) {
				await cron.schedule(
					`50 ${subject["start"] - 1.0} * * ${day}`,
					async () => {
						const groupTo = parser(group["name"]);

						const text =
							`<b>⛓ Upcoming Class Notification ⛓</b> \n` +
							`\n` +
							`⚠ <b>10 minutes left</b> for <code>${subject["name"]} ${subject["type"]}</code> class. ` +
							`Please, get ready as soon as possible! ` +
							`You can get to the website by pressing buttons below: `;

						const keyboard = Markup.inlineKeyboard([
							[
								Markup.urlButton(
									`📺 Video Conference`,
									await identifier(subject["acronym"])
								),
							],
						]);

						await bot.telegram
							.sendMessage(groupTo, text, {
								parse_mode: "HTML",
								reply_markup: keyboard,
							})
							.then(async (message) => {
								await bot.telegram
									.pinChatMessage(groupTo, message.message_id)
									.catch(null);
							});
					},
					{
						timezone: "Asia/Tashkent",
					}
				);
			}
		}
	}
})();

middleware(composer);
consoles.module(__filename);
