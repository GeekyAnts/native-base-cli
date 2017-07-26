var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;
var path = require("path");

module.exports = function initExpo() {
	var initProcess = spawnSync(
		"git",
		["clone", "-b", "Expo", "git@github.com:GeekyAnts/native-base-boilerplate.git"],
		{
			stdio: "inherit",
		}
	);

	function getYarnVersionIfAvailable() {
		var yarnVersion;
		try {
			// execSync returns a Buffer -> convert to string
			if (process.platform.startsWith("win")) {
				yarnVersion = (execSync("yarn --version").toString() || "").trim();
			} else {
				yarnVersion = (execSync("yarn --version 2>/dev/null").toString() || "").trim();
			}
		} catch (error) {
			return null;
		}
		if (yarnVersion) yarnInstall();
		else npmInstall();
	}

	var packageInstall = getYarnVersionIfAvailable();

	function yarnInstall() {
		spawnSync("yarn", ["install"], {
			cwd: path.join(process.cwd(), "native-base-boilerplate"),
			stdio: "inherit",
		});
	}

	function npmInstall() {
		spawnSync("npm", ["install"], {
			cwd: path.join(process.cwd(), "native-base-boilerplate"),
			stdio: "inherit",
		});
	}

	var removeGit = spawnSync("rm", ["-rf", ".git"], {
		cwd: path.join(process.cwd(), "native-base-boilerplate"),
		stdio: "inherit",
	});
};
