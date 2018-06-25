import React from 'react';

// pass in USER_DATA & CHANNEL_LIST
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="/" className="navbar-brand">
          <img src="https://i.imgur.com/WoFLlzP.jpg" alt="msn" />
        </a>
         <h3>MSN</h3>
      </div>

      <div className="sidebar-channels">
        CHANNEL
      </div>

      <div className="sidebar-userinfo">
        <img className="miniavatar" src="https://i.imgur.com/WoFLlzP.jpg" alt="user" />
        <div className="userinfo-details">
          <p className="username">Username</p>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;