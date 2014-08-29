"use strict";

var disconnectUser = function (listOfUsers, io, socket) {
    console.log('User disconnected');

    function deleteUsername(list, needle) {
        var index = list.indexOf(needle);
        if (index > -1) {
            list.splice(index, 1);
        }
        return list;
    }

    function broadcastUserDisconnected() {
        if (socket.username) {
            io.emit('broadcast', 'User ' + socket.username + ' disconnected');
        } else {
            io.emit('broadcast', 'A user disconnected');
        }
    }

    broadcastUserDisconnected();
    listOfUsers = deleteUsername(listOfUsers, socket.username);
    io.emit('sendUser', listOfUsers);
    console.log("List of users after disconnect "
        + listOfUsers.toString());

};

var handleUserName = function (user, socket, io, listOfUsers) {
    function modifyUsernameToMakeItUnique(number) {
        return user + number.toString();
    }

    if (!socket.username) {
        var index,
            number;
        index = listOfUsers.indexOf(user);
        number = 0;
        while (index !== -1) {
            number = number + 1;
            user = modifyUsernameToMakeItUnique(number);
            index = listOfUsers.indexOf(user);
        }
        listOfUsers.push(user);
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
            disconnectUser(listOfUsers, io, socket);
        });

        socket.on('user name', function (user) {
            handleUserName(user, socket, io, listOfUsers);
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


