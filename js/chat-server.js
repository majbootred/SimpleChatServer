/** copied from http://socket.io/docs/ */
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var chatClients = new Array();
app.listen(4711);

function handler (req, res) {
    fs.readFile(__dirname + '/../public/chat-index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html'+err+", ");
            }

            res.writeHead(200);
            res.end(data);
        });
}

function deleteFromArray(array,item){
    var newArray = [];
    for (var i=0;i<array.length;i++){
        if (array[i] !== item){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
io.on('connection', function (socket) {
    var numberOfClients = chatClients.push(socket);
    console.log("new client connected, clients: "+numberOfClients);

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    socket.on('disconnect', function() {
            chatClients = deleteFromArray(chatClients,socket);
            var numberOfClients = chatClients.length;
            console.log("client disconnected; remaining clients: "+numberOfClients);
        });
    });

});
