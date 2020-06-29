const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
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