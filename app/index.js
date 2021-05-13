const express = require('express');
const https = require('https');

const app = express();

const port = 3000;

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.send('Hello API');
});