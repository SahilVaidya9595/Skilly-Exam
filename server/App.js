const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('hello world from server');
});

app.get('/practice', (req, res) => {
    res.send('hello Home world from server');
});

app.get('/about', (req, res) => {
    res.send('hello About world from server');
});

app.get('/contact', (req, res) => {
    res.send('hello Contact world from server');
});

app.listen(3001, () => {
    console.log('Server is running at port no 3001');
});

console.log('hello Team from harshal 1:31');