import React from 'react';

const userArray = [
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}, 
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}, 
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}
]

const renderUsernames = () => {
  return userArray.map((user) => {
    return (
      <li>
        <a>
          <div className="sidebar-user-container">
            
            <div className="column1">
              <img className="miniavatar" src="https://i.ytimg.com/vi/OjMiTGrCSaA/hqdefault.jpg" alt="userrow" />
            </div>

            <div className="column2">
              <div>
                <p>{user.name}</p>
                <p>Online<div className="status-light"></div></p>
              </div>
            </div>

          </div>
        </a>
      </li>
    );
  })
}

// pass in USER_DATA & CHANNEL_LIST
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="/" className="navbar-brand">
          <img src="https://i.ytimg.com/vi/OjMiTGrCSaA/hqdefault.jpg" alt="msn" />
        </a>
         <h3>MSN</h3>
      </div>

      <div className="sidebar-user-list">
        <ul class="nav nav-pills nav-stacked">
          {renderUsernames()}
        </ul>
      </div>

      <div className="sidebar-userinfo">
        <img className="miniavatar" src="https://i.ytimg.com/vi/OjMiTGrCSaA/hqdefault.jpg" alt="user" />
        <div className="userinfo-details">
          <p className="username">Username</p>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;