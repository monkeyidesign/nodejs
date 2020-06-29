const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Testing write with node</title></head><body>');
    res.write('<div class="page">');
    res.write('<p>Hi Node! my name is Sam adn I\'m curious to know more about you.</p>');
    res.write('</div>');
    res.write('</body></html>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});