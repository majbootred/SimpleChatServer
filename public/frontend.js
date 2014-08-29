var socket = io();
var newUser;

$('form').submit(function(){
    socket.emit('user name', $('#user_name').val());
    socket.emit('chat message', $('#input_message').val());
    $('#input_message').val('');
    return false;
});

socket.on('broadcast', function(msg){
    $('#messages').append($('<li>').text(msg));
});