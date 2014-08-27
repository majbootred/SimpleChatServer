var http = require('http');
//var util = require('./util');
var userInfo = require('./userInfo');

http.createServer(function (req, res) {
    //var answer =  util.helloWorld();
    var newuser = userInfo.tellNewUser();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end(answer);
}).listen(1337, 'bilge.local');

console.log('Server running at http://bilge.local:1337/');

