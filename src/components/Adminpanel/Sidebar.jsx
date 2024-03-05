import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
      
       <ul>
        <a href='/s'><li>Department</li></a>
        <a href='/c'><li>Add Doctors</li></a>
       </ul>
      
       <ul>
       <a href="/sview"><li>Added Department</li></a>
       <a href="/viewdetails"><li>Doctor Details</li></a>
      
      </ul>
      
    </div>
  );
};

export default Sidebar;