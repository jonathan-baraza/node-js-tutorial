const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`
   <h1 style="color:red;">Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <br>
   <br>
   <a href="/" style="cursor:pointer;text-decoration:none;background-color:#007acc;color:white;border:none;padding:10px;border-radius:10px;margin-top:30px;">Back home</a>
   `);
});

server.listen(5000);
