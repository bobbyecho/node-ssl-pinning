const express = require('express');

const app = express();

const httpPort = 3000;

app.get('/', (req, res) => {
    res.json({
        code: '000',
        status: 'success',
        data: 'Hello world!'
    });
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello API</h1>');
});

app.listen(httpPort);
