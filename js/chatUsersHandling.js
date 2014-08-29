exports.emitConnectionMessages = function (io, userlist) {
    io.on('connection', function (socket) {
        io.emit('broadcast', 'a user connected');
        console.log('a user connected');

        socket.on('disconnect', function () {
            console.log('user disconnected');
            if (socket.username) {
                io.emit('broadcast', 'user ' + socket.username + ' disconnected');
            } else {
                io.emit('broadcast', 'a user disconnected');
            }
            userlist = deleteUsername(userlist, socket.username);
            io.emit('sendUser', userlist);
            console.log("userlist nach loeschen " + userlist.toString());
        });

        socket.on('user name', function (msg) {
            if (!socket.username) {
                msg = getUniqueUsername(userlist, msg);
                userlist.push(msg);
                io.emit('sendUser', userlist);
                socket.username = msg;
                console.log("userlist nach befuellen " + userlist.toString());
            }
        });

        socket.on('chat message', function (msg) {
            io.emit('broadcast', socket.username + ": " + msg);
        });
    });
};

var deleteUsername = function (userlist, username) {
    var index = userlist.indexOf(username);
    if (index > -1) {
        userlist.splice(index, 1);
    }
    return userlist;
};

//should refactor this. but does this work? would we also have to input io and socket?
var setUsername = function(userlist, msg, socket){
    msg = getUniqueUsername(userlist, msg);
    userlist.push(msg);
    io.emit('sendUser', userlist);
    socket.username = msg;
    console.log("userlist nach befuellen " + userlist.toString());
};


var getUniqueUsername = function(userlist, msg){
    var name = msg;
    var index = userlist.indexOf(msg);
    var number = 0;
    while (index != -1) {
        number++;
        msg = name + number.toString();
        index = userlist.indexOf(msg);
    }
    return msg;
};