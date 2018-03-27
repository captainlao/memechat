import React, { Component } from 'react';
import '../css/styles.css';

class Messages extends Component {
    render() {
      let listItems = (this.props.messageList).map((d) => <li> {d.from}: {d.text} </li>);

      return (
        <div className="chat__messages">
          <ol id="messages">
            {listItems}
          </ol>
        </div>
      );
    }
}
  
export default Messages;