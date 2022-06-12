const util = require("util");
const exec = util.promisify(require("child_process").exec);

const powerCommands = async (req, res) => {
  if (req.headers.data) {
    const data = {
      selected: req.headers.data,
    };
    let command = "";

    switch (req.headers.data) {
      case "Suspend":
        command = "systemctl suspend";
        break;
      case "Power Off":
        command = "shutdown -h now";
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
  powerCommands,
};
