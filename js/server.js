const port = 1337;

"use strict";
var statistics = require('./statistics.js');
var chatUsersHandling = require('./chatUsersHandling');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var listOfUsers = [];
listOfUsers.deleteUsername = function(needle) {
    var index = this.indexOf(needle);
    if (index > -1) {
        console.log('Removing ' + this[index] + ' from user list of users.');
        this.splice(index, 1);
    }
};

app.use(express.static(__dirname + '/../public'));

app.get('/statistics', function (req, res) {
    console.log('we received a call for statistics ' +
        'and we currently have ' + listOfUsers.length + ' active users.');
    res.send(statistics.printStatistics(listOfUsers));
});

chatUsersHandling(io, listOfUsers);

server.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});
