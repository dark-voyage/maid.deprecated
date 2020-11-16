/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */

const { Markup } = require("telegraf");

exports.start = Markup.inlineKeyboard([
	[Markup.callbackButton("Show more information", "help")],
]);

exports.help = Markup.inlineKeyboard([
	[Markup.urlButton("Announcement's Channel", "https://t.me/SeventyPlusBIS")],
]);

exports.invalid = Markup.inlineKeyboard([
	Markup.callbackButton(`Show available commands`, `help`),
]);

exports.error_admin = Markup.inlineKeyboard([
	Markup.urlButton(`Contact with admin`, `https://t.me/genemator`),
]);

exports.links = async (links) => {
	return Markup.inlineKeyboard([
		[
			Markup.urlButton(
				`Announcement Channel`,
				`https://t.me/SeventyPlusBIS`
			),
		],
		[
			Markup.urlButton(`4BIS1`, `https://t.me/The4BIS1`),
			Markup.urlButton(`4BIS2`, `https://t.me/The4BIS2`),
		],
		[
			Markup.urlButton(`4BIS3`, `https://t.me/The4BIS3`),
			Markup.urlButton(`4BIS4`, `https://t.me/The4BIS4`),
		],
		[
			Markup.urlButton(`4BIS5`, `https://t.me/The4BIS5`),
			Markup.urlButton(`4BIS6`, `https://t.me/The4BIS6`),
		],
		[Markup.urlButton(`4BIS7`, `https://t.me/The4BIS7`)],
	]);
};

exports.contribute = Markup.inlineKeyboard([
	[Markup.urlButton(`Contribute!`, `https://github.com/wiut-bis/maid`)],
	[Markup.urlButton(`Organisation`, `https://github.com/wiut-bis/`)],
]);
