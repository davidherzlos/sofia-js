
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./resources/view.html', (err, data) => {
    if (err) {
      console.error('There was an error with req: ' + req);
      return;
    }
    res.end(data);
  });
});

const port = 1337;
console.log(`Starting server at port ${port}`);
server.listen(port);
