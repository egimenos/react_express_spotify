require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 8888;

app.listen(PORT, () => {
  console.log(`Express is running at localhost:${PORT}`);
});
