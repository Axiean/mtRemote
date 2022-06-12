const express = require("express");
const { appCommands } = require("../controllers/apps");
const { musicCommands } = require("../controllers/music");
const { powerCommands } = require("../controllers/power");

const router = express.Router();

router.route("/power").get(powerCommands);
router.route("/music").get(musicCommands);
router.route("/app").get(appCommands);

module.exports = router;
