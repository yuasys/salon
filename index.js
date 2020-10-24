const http = require('http');
http.createServer(function (request, response) {
  const contents = `<h1>Helo World</h1>
  <p>いじってみました</p>`
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  response.end(contents);
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');