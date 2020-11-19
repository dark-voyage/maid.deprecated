const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const groups = require("../../database/json/groups");

composer.hears(/\/tell (.*)/gi, async (ctx) => {
	let input = ctx.match[1];

	const text =
		`<b>⚠ ATTENTION: ANNOUNCEMENT ⚠</b> \n` +
		`\n` +
		`<i>${input}</i> \n` +
		`\n` +
		`<b>Sincerely, admins of +70 (or genemator (☞ﾟヮﾟ)☞)</b> \n`;

	for (let group of groups) {
		await ctx.telegram.sendMessage(group, text, {
			parse_mode: "HTML",
			reply_markup: keyboard.help,
		});
	}

	await ctx.replyWithHTML(`<b>Your announcement has been sent!</b>`);
});

composer.hears(/\/tell/, async (ctx) => {
	await ctx.replyWithHTML(
		`<b>You requested tell command where you can send announcements to all groups</b>` +
			`\n` +
			`\n` +
			`<i>In order to send an announcement to groups, please use our templates shown below:</i>` +
			`\n` +
			`<code>/tell &lt;your very long text here&gt;</code>` +
			`\n` +
			`\n` +
			`<i>Example:</i>` +
			`\n` +
			`<code>/tell Hello dear users. BIS group are the best!</code>`
	);
});
middleware(composer);
consoles.module(__filename);
