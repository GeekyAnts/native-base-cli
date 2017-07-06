var spawnSync = require("child_process").spawnSync;
var path = require("path");

module.exports = function init() {
  var initProcess = spawnSync(
    "git",
    ["clone", "git@github.com:GeekyAnts/native-base-boilerplate.git"],
    { stdio: "inherit" }
  );
  var npmInstall = spawnSync("npm", ["install"], {
    cwd: path.join(process.cwd(), "native-base-boilerplate"),
    stdio: "inherit"
  });
};
