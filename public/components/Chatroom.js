import React, { Component } from 'react';
import '../css/styles.css';
import Messages from './Messages';
import Chatbox from './Chatbox';
import { generateMessage } from '../../server/utils/message';

// Main component that displays messages and user chat message box
class Chatroom extends Component {
    render() {
      // Must be better way than this 
      let greetingMessage = generateMessage('Admin', 'Type something to start chatting!');
      let messageList = [greetingMessage];

      return (
        <div className="chat__main">
          <Messages messageList={messageList} />
          <Chatbox />
        </div>
      );
    }
}
  
export default Chatroom;