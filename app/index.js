const express = require('express');
const https = require('https');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello API</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});