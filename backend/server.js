const express = require("express");

const http = require('http')

const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

var path = require("path");

const cors = require("cors");

app.use(express.static('./frontend/build'));

app.use(cors());

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

server.listen(port, () => {
    console.log("server listening at http://localhost:" + port);
});

