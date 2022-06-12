const util = require("util");
const exec = util.promisify(require("child_process").exec);

const musicCommands = async (req, res) => {
  if (req.headers.data) {
    const data = {
      selected: req.headers.data,
      music: "",
    };
    let command = "";

    switch (req.headers.data) {
      case "Music":
        command = "--play";
        break;
      case "previous":
        command = "--previous";
        break;
      case "next":
        command = "--next";
        break;
      case "vol_up":
        command = "--volume-up";
        break;
      case "vol_down":
        command = "--volume-down";
        break;
      case "play":
        command = "--play-pause";
        break;
    }
    const { stdout, stderr } = await exec(
      `rhythmbox-client  ${command} --print-playing`
    );
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
    data.music = stdout;
    res.json(data);
  } else {
    res.send("OOOOPS!");
  }
};

module.exports = {
  musicCommands,
};
