import React from 'react';



function renderMessages() {
  return msgData.map((message) => {
    return (
      <div className="message-container">
        <div className="column1"> 
          <img className="miniavatar" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png" alt="user" />
        </div>

        <div className="column2">
          
          <div className="message-header">
            <span className="username">{message.username}</span>
            <span className="message-time">{message.created_at}</span>
          </div>

          <div className="message-message">
            <p>{message.message}</p>
          </div>

        </div>
      </div>
    )
  })
}

const MessageList = () => {
  return (
      <div className="message-list">
        {renderMessages()}
      </div>
  );
}

export default MessageList;

const msgData = [
  {
    username: 'User1',
    message: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite askajsdf',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh needed itself silent course.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh nee',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'lolol',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polahwa soidjfg wflaksjdlkfn!!!',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User1',
    message: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite askajsdf',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh needed itself silent course.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh nee',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'lolol',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polahwa soidjfg wflaksjdlkfn!!!',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User1',
    message: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite askajsdf',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh needed itself silent course.',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polite in of in oh nee',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'lolol',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User2',
    message: 'Polahwa soidjfg wflaksjdlkfn!!!',
    created_at: '1969-07-21 T 02:56 UTC'
  },
  {
    username: 'User3',
    message: 'Polite in of in oh needed itself silent course.',
    created_at: '1969-07-21 T 02:56 UTC'
  }
]