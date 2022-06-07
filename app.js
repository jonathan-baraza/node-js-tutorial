const http = require("http");
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

const { emitWarning } = require("process");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
   <div class="jumbotron">Welcome to my first NodeJS Website.</div>
   <a href="/about" class="btn btn-success mt-3">About me</a>
  `);
  }

  if (req.url == "/about") {
    res.end(`<p>My name is Jonathan Baraza, and i am a Senior Software Engineer and Manager at Google.</p>
   <a href="/" mt-3 btn btn-outline-primary>Back Home</a>`);
  }

  req.end("Not Found");
});

server.listen(5000);
