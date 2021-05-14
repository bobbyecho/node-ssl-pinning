const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');
const helmet = require('helmet');

const app = express();

const httpPort = 3000;
const httpsPort = 443;

app.use(helmet());

const httpsOptions = {
    key: fs.readFileSync("./certs/api.fingerinc.xyz/privkey1.pem"),
    cert: fs.readFileSync("./certs/api.fingerinc.xyz/fullchain1.pem"),
    requestCert: true,
    rejectUnauthorized: true
};

const httpsServer = https.createServer(httpsOptions, app);
const httpServer = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello API</h1>');
});

httpServer.listen(httpPort);
httpsServer.listen(httpsPort);
