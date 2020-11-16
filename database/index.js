/**
 * Group Timetable Database Extractor
 * @name time database
 * @description extract timetable for a bis group
 * @type {"0": *, "1": *, "2": *, "3": *, "4": *, "5": *, "6": *, "7": *}
 *
 */

const bis1 = require("../timetable/4BIS1.json");
const bis2 = require("../timetable/4BIS2.json");
const bis3 = require("../timetable/4BIS3.json");
const bis4 = require("../timetable/4BIS4.json");
const bis5 = require("../timetable/4BIS5.json");
const bis6 = require("../timetable/4BIS6.json");
const bis7 = require("../timetable/4BIS7.json");
const groups = require("./group");

module.exports = async (chat) => {
	switch (await groups(chat)) {
		case 1:
			return bis1;
		case 2:
			return bis2;
		case 3:
			return bis3;
		case 4:
			return bis4;
		case 5:
			return bis5;
		case 6:
			return bis6;
		case 7:
			return bis7;
	}
};
