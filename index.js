const http = require('http');
const fs = require('fs');
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();


const server = http.createServer(function(request, response) {
  fs.readFile('readme.md', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(md.render(data.toString()));
    return response.end();
  });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);
