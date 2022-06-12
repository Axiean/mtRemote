const express = require("express");
const app = express();
const port = 4000;
const commands = require("./routes/commands");
app.use(express.json());
app.use("/commands", commands);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
