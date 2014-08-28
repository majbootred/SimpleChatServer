exports.emitConnectionMessages = function(io){
    io.on('connection', function(socket){
        io.emit('chat message', 'a user connected');
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
            io.emit('chat message', 'a user disconnected');
        });
    });
};

exports.emitChatMessage =  function(io)
{
    io.on('connection', function (socket) {
        socket.on('chat message', function (msg) {
            io.emit('chat message', msg);
        });
    });
};
