const port = 80;

var chatUsersHandling = require('./chatUsersHandling');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userlist = new Array();

app.use(express.static(__dirname + '/../public'));

app.get('/statistics', function (req, res) {
    res.send(printStatistics());
});

function printStatistics() {
    var statistics = "Here you can see our statistics"
        + "<br />" +
        "Number of active users: " + userlist.length;
    for (i = 0; i < userlist.length; i++) {
        statistics += "<br />" + userlist[i];
    }
    return statistics;
}

chatUsersHandling.emitConnectionMessages(io, userlist);

var server = http.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});
