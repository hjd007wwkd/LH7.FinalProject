import React from 'react';

const userArray = [
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}, 
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}, 
  {name: 'Bob'}, {name: 'Sarah'}, {name: 'Kenneth'}, {name: 'Jack'},
  {name: 'Brad'}, {name: 'Julie'}, {name: 'Chloe'}, {name: 'Susan'}
];

const renderUsernames = (userList) => {
  return userList.length === 0 ? true : 
  userList.map((user) => {
    return (
      <li className="nav-li">
        <a className="nav-link">
          <div className="sidebar-user-container">
            
            <div className="column1">
              <img className="miniavatar" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png" alt="userrow" />
            </div>

            <div className="column2">
              <div>
                <p>{user}</p>
                <p><div className="status-light"></div>Online</p>
              </div>
            </div>
            
            <div className="column3">
              <i class="fas fa-ellipsis-v"></i>
            </div>

          </div>
        </a>
      </li>
    );
  })
}

// pass in USER_DATA & CHANNEL_LIST
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
          <img className="miniavatar" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png" alt="userrow" />
        </div>

        <div className="column2">
          <div>
            <p>{props.username}</p>
            <p><div className="status-light"></div>Online</p>
          </div>
        </div>
        <div className="column3"></div>
      </div>

    </div>
  );
}

export default SideBar;