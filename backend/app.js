const express = require("express");
const app = express();

app.get("/naga", (req, res, next) => {
  return res.send("hello nag");
});

app.listen(3001, () => {
  console.log("port is running at 3001");
});
