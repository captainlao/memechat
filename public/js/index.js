// Client continually attempts to connect as sockets are persisted communication
var socket = io();

// Use regular functions here for browser compatitibility
socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log(message);
});
