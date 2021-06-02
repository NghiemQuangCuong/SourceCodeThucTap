const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World~\n'+
        'My first server');
});


server.listen(port, () => {
    console.log(`Server started at port ${port}. Press Control + C to exit....`);
});