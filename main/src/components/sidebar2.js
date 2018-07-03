import React from 'react';

const renderUser = (user) => {
  return (
    <li className="nav-li">
      <a className="nav-link">
        <div className="user-container">
          
          <div className="column1">
            <img className="miniavatar" src={user.avatar} alt="userrow" />
          </div>

          <div className="column2">
            <div>
              <p>{user.username}</p>
              <p><div className="status-light"></div>Online</p>
            </div>
          </div>
            
          <div className="column3">
            <i class="fas fa-ellipsis-v"></i>
          </div>

        </div>
      </a>
    </li>
  )
}

const renderUsernames = (userList) => {
  const users = [];
  for (var username in userList) {
    users.push(renderUser(userList[username]))
  }
  return users
}

const SideBar = (props) => {
  return (
    <div className="sidebar">

      <div className="sidebar-top">
        <a href="/" className="navbar-brand">
          <img src="https://www.softexia.com/wp-content/uploads/2013/05/Windows-Live-Messenger.png" alt="msn" />
        </a>
         <h3>msn</h3>
      </div>

      <div className="sidebar-user-list">
        <ul class="nav nav-pills">
          {renderUsernames(props.userList)}
        </ul>
      </div>

      <div className="sidebar-userinfo">
        <div className="column1">
          <img className="miniavatar" src={props.user.avatar} alt="userrow" />
        </div>

        <div className="column2">
          <div>
            <p>{props.user.username}</p>
            <p><div className="status-light"></div>Online</p>
          </div>
        </div>
        <div className="column3"></div>
      </div>

    </div>
  );
}

export default SideBar;