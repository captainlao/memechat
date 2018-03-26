import React, { Component } from 'react';
import '../css/styles.css';

class Chatbox extends Component {
    render() {
      return (
        <div className="chat__footer">
            <form id="message-form">
                <input 
                    name="message" 
                    type="text" 
                    placeholder="Message" 
                    autofocus 
                    autocomplete="off" />
                <button>Send</button>
            </form>
        </div>
      );
    }
}
  
export default Chatbox;