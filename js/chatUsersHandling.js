exports.emitConnectionMessages = function(io, userlist){
    io.on('connection', function(socket){
        io.emit('broadcast', 'a user connected');
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
            io.emit('broadcast', 'user ' + socket.username+ ' disconnected');
            userlist = deleteUsername(userlist, socket.username);
            console.log("userlist nach loeschen " + userlist.toString());
        });
        socket.on('user name', function (msg) {
            if (!socket.username) {
                name = msg;
                var index = userlist.indexOf(msg);
                var number = 0;
                while (index != -1) {
                    number++;
                    msg = name + number.toString();
                    index = userlist.indexOf(msg);
                }
                userlist.push(msg);
                socket.username = msg;
                console.log("userlist nach befuellen " + userlist.toString());
            }
        });
        socket.on('chat message', function (msg) {
            io.emit('broadcast', socket.username + ": " + msg);
        });
    });
};
var deleteUsername = function(userlist, username){
    var index = userlist.indexOf(username);
    if (index > -1) {
        userlist.splice(index, 1);
    }
    return userlist;
};