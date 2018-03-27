import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';
import App from '../components/App';

var socket = io();

/*
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

    // Create new list element and append to displayed ordered list
    var li = jQuery('<li></li>');
    li.text(message.from + ': ' + message.text);
    
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    // Prevent default form submit behaivor
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]');

    socket.emit('createMessage', {
       from: 'User',
       text: messageTextbox.val()
    }, function () {
        // This fires when acknowledgement arrives back from server
        // Clear message if successful
        messageTextbox.val('');
    });
});
*/

ReactDOM.render(<App />, document.getElementById('root'));