import React, { Component } from 'react';
import '../css/styles.css';

const data =[{"name":"test1"},{"name":"test2"}];
const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

class Messages extends Component {
    render() {
      return (
        <div>
          {listItems}
        </div>
      );
    }
}
  
export default Messages;