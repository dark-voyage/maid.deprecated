/**
 * JSON Down Parser
 * @name axios json parser
 * @description parses json from online API
 * @return JSON
 */

const axios = require("axios");

module.exports = (link) => {
	return axios
		.get(link)
		.then((response) => {
			return response.data;
		})
		.catch((errors) => {
			return null;
		});
};
