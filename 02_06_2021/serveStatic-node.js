const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200)
{
    fs.readFile(__dirname + path, (err, data) => {
        if (err)
        {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('500 - Internal Error');
        }
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
    });
}

const server = http.createServer(port, (req, res) => {
    const path = req.url;
    switch (path)
    {
        case '/':
            serveStaticFile(res, '/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port, () => {
    console.log(`Server started at port ${port}, press control + c to exit`);
});
