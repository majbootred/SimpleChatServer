

exports.emitConnectionMessages = function(io){
    io.on('connection', function(socket){
        var userName;

        io.emit('broadcast', '*** a user connected ***');
        console.log('a user connected');

        socket.on('disconnect', function(){
            console.log('user disconnected');
            io.emit('broadcast', '/// user ' + userName+ ' disconnected ///');
        });


        socket.on('user name', function (msg) {
            console.log(msg);
            userName=msg;
        });

        socket.on('chat message', function (msg) {
            io.emit('broadcast', userName + ": " + msg);
            console.log(msg);
        });

    });
};
