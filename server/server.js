'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Normalize destination path so we don't have to go in and out of folders
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// Create web socket server (real-time)
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// Serve up our index page using static middleware
// (removes need to specify exact file, as we serve up entire public/)
app.use(express.static(publicPath));

// Listens for a connection to server
// When client establishes connection, callback fires off passing in the web socket they are communicating on
io.on('connection', (socket) => {
    console.log('New user connected');
    
    // Listen for an emitted message from client and emit back to all connections
    socket.on('createMessage', (message) => {
        console.log(message);

        // createAt set here for security 
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    // Socket listens for client disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});