const express = require('express');
const app = express();
const port = 3000;

// home page
app.get('/', (req, res) => {
    res.contentType('text/plain');
    res.send('Hello World');
});

// about page
app.get('/about', (req, res) => {
    res.contentType('text/plain');
    res.send('About page');
});

// 404 catch
app.use((req, res) => {
    res.contentType('text/plain');
    res.status(404);
    res.send('404 - File not Found');
});

// 500 catch
app.use((err, req, res, next) => {
    // log error message
    console.log(err.message);
    res.contentType('text/plain');
    res.status(500);
    res.send('500 - Internal Error');
});

app.listen(port, () => {
    console.log(`Server started at port ${port}, Press Ctrl + C to exit`);
});