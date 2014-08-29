"use strict";

var disconnectUser = function (listOfUsers, io, userName) {
    console.log('User disconnected');

    function broadcastUserDisconnected() {
        if (userName) {
            io.emit('broadcast', 'User ' + userName + ' disconnected');
        } else {
            io.emit('broadcast', 'A user disconnected');
        }
    }

    broadcastUserDisconnected();
    listOfUsers.deleteUsername(userName);
    io.emit('sendUser', listOfUsers);
    console.log("List of users after disconnect "
        + listOfUsers.toString());

};

var handleUserName = function (user, socket, io, listOfUsers) {
    if (!socket.username) {

        user = listOfUsers.addNewUserName(user);

        io.emit('sendUser', listOfUsers);
        socket.username = user;
        console.log("List of users after new connect " + listOfUsers.toString());
    }

};

module.exports = function (io, listOfUsers) {
    io.on('connection', function (socket) {
        io.emit('broadcast', 'a user connected');
        console.log('User connected');

        socket.on('disconnect', function () {
            disconnectUser(listOfUsers, io, socket.username);
        });

        socket.on('user name', function (user) {
            handleUserName(user, socket, io, listOfUsers);
            console.log('** ' + listOfUsers.length);
        });

        function broadcastNewMessage(msg) {
            var name = socket.username;
            console.log(name + ' send a new message: ' + msg);
            io.emit('broadcast', name + ": " + msg);
        }

        socket.on('chat message', function (message) {
            broadcastNewMessage(message);
        });

    });
};


