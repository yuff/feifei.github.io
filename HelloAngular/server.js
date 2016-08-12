var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));

app.use(function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});