#!/usr/bin/env node
"use_strict";

var fs = require("fs-extra");
var cmd = process.argv[2];
var cmd2 = process.argv[3];
var init = require("./modules/init");
var initExpo = require("./modules/initExpo");

var renameProject = function() {
	var oldName = process.argv[3];
	var newName = process.argv[4];
	require("./modules/renameProject.js")(oldName, newName);
};

var displayHelp = function() {
	console.log("This is a help message");
};

switch (cmd) {
	case "init":
		switch (cmd2) {
			case "--expo":
				initExpo();
				break;
			default:
				init();
		}
		break;
	default:
		displayHelp();
}
