const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

composer.command(`links`, async (ctx) => {
	await ctx.replyWithHTML(message.links, {
		parse_mode: "HTML",
		reply_markup: await keyboard.links(),
	});
});

middleware(composer);
consoles.module(__filename);
