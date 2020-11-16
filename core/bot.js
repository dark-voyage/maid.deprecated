/**
 * Application Core Module
 * @name core
 * @description the main api wrapper point
 * @return { bot, composer, middleware }
 */

const { Telegraf, Composer } = require("telegraf");

const env = require("./env");
const consoles = require("../layouts/consoles");

const bot = new Telegraf(env.BOT_TOKEN);
const composer = new Composer();
const middleware = (composer) => {
	bot.use(composer.middleware());
};

bot.telegram.getMe().then((botInfo) => {
	bot.options.username = botInfo.username;
});

if (env.ENVIRONMENT === "heroku") {
	bot.launch({
		webhook: {
			domain: env.DOMAIN,
			hookPath: "/bot",
			port: env.PORT,
		},
	})
		.then(async () => {
			consoles.launch(env.ENVIRONMENT);
		})
		.catch((error) => consoles.errors(error));
} else if (env.ENVIRONMENT === "local") {
	bot.launch()
		.then(() => consoles.launch(env.ENVIRONMENT))
		.catch((error) => consoles.errors(error));
} else {
	consoles.wrongEnv();
}

module.exports = {
	bot,
	composer,
	middleware,
};
