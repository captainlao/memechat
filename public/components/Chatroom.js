import React, { Component } from 'react';
import '../css/styles.css';
import Messages from './Messages';
import Chatbox from './Chatbox';

// Main component that displays messages and user chat message box
class Chatroom extends Component {
    render() {
      return (
        <div className="chat__main">
          <Messages />
          <Chatbox />
        </div>
      );
    }
}
  
export default Chatroom;