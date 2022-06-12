const util = require("util");
const exec = util.promisify(require("child_process").exec);

const appCommands = async (req, res) => {
  if (req.headers.data) {
    const data = {
      selected: req.headers.data,
      message: "",
    };
    let command = "";

    switch (req.headers.data) {
      case "Chrome":
        command = "google-chrome";
        break;
      case "ScreenShot":
        command =
          "scrot -b -d 5 '%Y:%m:%d:%H:%M:%S.png' -e 'mv $f ~/Pictures/'";
        data.message = "Screen Shot Taken Successfully!";
        break;
    }
    const { stdout, stderr } = await exec(`${command}`);
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);

    res.json(data);
  } else {
    res.send("OOOOPS!");
  }
};

module.exports = {
  appCommands,
};
