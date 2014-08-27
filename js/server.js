const Port = 1337;
var http = require('http');
var util = require('./util');
var requestCount = 0;
var url = require('url');
var username;
var server_js = module.exports = {

    getURLfromBrowser: function(req) {
        var str = url.format(req.url);
        username = util.deleteSlashFromPathName(str);
    },

    printHelloUser: function() {
        if (username != 'favicon.ico') {
            return "Hello " + username + "!";
        }
    },

    increaseRequestCountByOne: function() {
        requestCount++;
    },

    sendResponse: function(response) {
        var answer = this.checkForAdmin();
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(answer);
    },

    printUserCount: function() {
        return "Number of users: " + requestCount;
    },

    checkForAdmin: function() {
        if (username == "admin") {
            return this.printUserCount();
        } else {
            return this.printHelloUser();
        }
    }

}

var handleDefaultRequest = function (req, res) {
    server_js.increaseRequestCountByOne();
    server_js.getURLfromBrowser(req);
    server_js.sendResponse(res);
};

var server = http.createServer();

server.on('request', handleDefaultRequest);

server.listen(Port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + Port + '/');