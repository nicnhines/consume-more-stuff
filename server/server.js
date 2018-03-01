const express = require(`express`);
const bodyParser = require(`body-parser`);
const server = express();

const PORT = process.env.PORT || 8080;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get(`/`, (req, res) => {
  return res.send(`server smoke test`);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});