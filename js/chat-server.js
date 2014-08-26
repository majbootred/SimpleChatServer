/** copied from http://socket.io/docs/ */
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

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

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    socket.on('disconnect', function() {
            console.log("Bye, bye");
        });
    });

});
