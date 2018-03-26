import React, { Component } from 'react';
import '../css/styles.css';
import SidebarHeader from './SidebarHeader';

// For user header and future friend list
class Sidebar extends Component {
    render() {
      return (
        <div className="chat__sidebar">
            <SidebarHeader />
        </div>
      );
    }
  }
  
  export default Sidebar;