const express = require('express');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

const app = express();

app.use(helmet())

const port = 3000;

const options = {
    key: fs.readFileSync("./certs/api.fingerinc.xyz/privkey1.pem"),
    cert: fs.readFileSync("./certs/api.fingerinc.xyz/fullchain1.pem")
};

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello API</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

https.createServer(options, app).listen(443);