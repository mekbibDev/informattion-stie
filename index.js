const http = require("node:http");
const fs = require("node:fs/promises");
const hostname = "localhost";
const port = 8080;
const server = http.createServer(async (req, res) => {
  const path = req.url === "/" ? "./index.html" : `.${req.url}.html`;
  if (path !== "/favicon.ico") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let html;
    try {
      html = await fs.readFile(path);
    } catch (error) {
      html = await fs.readFile("./404.html");
    }
    res.write(html);
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
