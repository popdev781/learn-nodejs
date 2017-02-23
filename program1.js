
const http = require('http');

const hostname = 'localhost';
const port = 3000;


http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('Hello World at 8081\n');
}).listen(8081);
console.warn('it is also running on 8081');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
