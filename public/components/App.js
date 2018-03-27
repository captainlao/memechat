import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import '../css/styles.css';
import Sidebar from './Sidebar';
import Chatroom from './Chatroom';

class App extends Component {
  render() {
    return (
      <div className="chat">
        <Sidebar />
        <Chatroom />
      </div>
    );
  }
}

export default App;