const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");

composer.action("delete", async ({ deleteMessage }) => deleteMessage());

middleware(composer);
consoles.module(__filename);
