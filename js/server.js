var http = require('http');
var util = require('./util');
var count = 0;


http.createServer(function (req, res) {
    count++;
    console.log('User number ' + count);
    var answer =  util.helloWorld();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

