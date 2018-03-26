import React, { Component } from 'react';
import '../css/styles.css';

class SidebarHeader extends Component {
    render() {
      return (
        <div className='chat__header'>   
            <h3>People</h3>
            <button>Me</button>
        </div>
      );
    }
  }
  
  export default SidebarHeader;