// Client continually attempts to connect as sockets are persisted communication
var socket = io();

// Use regular functions here for browser compatitibility
socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'me',
        text: 'safdfa'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log(message);
});

/*
$(function() {
    var socket = io();
    $("form").submit(function() {
        socket.emit("chat message", $("#m").val());
        $("#m").val("");
        return false;
    });
    socket.on("chat message", function(msg) {
        $("#messages").append($("<li>").text(msg));
    });
});
*/