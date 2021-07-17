//Author: Divyashree Bangalore Subbaraya (B00875916)
const express = require("express");

const http = require('http')

const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

const path = require("path");

const cors = require("cors");

app.use(cors());

app.use(express.static('../.frontend/public'));

app.get("/*", function (req, res) {
    res.sendFile('./frontend/public/index.html' , { root : __dirname});
    res.send("hello")

});

server.listen(port, () => {
    console.log("server listening at http://localhost:" + port);
});

