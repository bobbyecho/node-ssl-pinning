const express = require('express');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

const app = express();

const port = 3000;
const httpsPort = 443;
const hostname = 'api.fingerinc.xyz';

app.use(helmet());

const httpsOptions = {
    key: fs.readFileSync("./certs/api.fingerinc.xyz/privkey1.pem"),
    cert: fs.readFileSync("./certs/api.fingerinc.xyz/fullchain1.pem"),
    requestCert: true,
    rejectUnauthorized: true
};

const httpsServer = https.createServer(httpsOptions, app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello API</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

httpsServer.listen(httpsPort, hostname);

