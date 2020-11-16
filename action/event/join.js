const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

composer.on("new_chat_members", async (ctx) => {
	await ctx
		.replyWithHTML(message.start, {
			parse_mode: "HTML",
			reply_markup: keyboard.start,
		})
		.then(async (message) => {
			setTimeout(async () => {
				await ctx.deleteMessage(message.message_id);
			}, 5000);
		});
});

middleware(composer);
consoles.module(__filename);
