const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./" });
});
app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: "./" });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "./" });
});
app.use((req, res, next) => {
  res.status(404).sendFile("404.html", { root: "./" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
