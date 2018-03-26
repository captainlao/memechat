import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import '../css/styles.css';
import Sidebar from './Sidebar';
import Chatroom from './Chatroom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Chatroom />
      </div>
    );
  }
}

export default App;