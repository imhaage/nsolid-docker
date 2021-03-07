const http = require("http");
const bcrypt = require("bcryptjs");

const server = http.createServer((req, res) => {
  const hash = bcrypt.hashSync("qscnslqkjdlkqjsldkjql", 8);
  res.end(hash);
});

server.listen(9999);
