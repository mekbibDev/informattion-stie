const http = require("node:http");
const fs = require("node:fs/promises");
const hostname = "localhost";
const port = 8080;
const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const html = await fs.readFile("./index.html");
  res.write(html);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
