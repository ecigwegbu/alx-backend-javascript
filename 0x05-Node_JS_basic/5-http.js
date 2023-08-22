// Create a more complex HTTP server using Node's HTTP module
const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
});
app.listen(port);
module.exports = app;
