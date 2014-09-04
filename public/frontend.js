$(document).ready(function () {
    var socket = io();

    $('form').submit(function () {
        socket.emit('user name', $('#user_name').val());
        $('#user_name').val();
        socket.emit('chat message', $('#input_message').val());
        $('#input_message').val('');
        console.log('user name: ' + $('#user_name').val());
        return false;
    });

    socket.on('broadcast', function (msg) {
        var prevContent = $('#messages').val();
        var newContent = prevContent + msg + "\n";
        $('#messages').val(newContent);
        var textArea = $('#messages');
        textArea.scrollTop(textArea[0].scrollHeight - textArea.height());
    });

    socket.on('sendUser', function (userlist) {
        $('#userList').html('');
        for (var i = 0; i < userlist.length; i++) {
            console.log(userlist[i]);
            $('#userList').append($('<li>').text(userlist[i]));
        };

    });

    socket.on('userNameModified', function(usernameAltered,user){
        if (usernameAltered) {
            alert("The name of the new user was already taken and therefor altered to " + user);
        }
    })

    socket.on('username', function(username){
       $('#user_name').val(username);
    });
});
