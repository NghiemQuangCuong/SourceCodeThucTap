const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    const path = req.url.replace(/\/?(?:\?.*)?$/, '');
    console.log(path);
    switch (path)
    {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home Page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About Page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found~');
            break;
    }
});

server.listen(port, () => {
    console.log(`Server started at port ${port}, Press Control + C to exit!`);
})