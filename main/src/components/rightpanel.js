import React from 'react';
import NavBar from './navbar';
import RoomList from './roomlist';


const RightPanel = () => {
  
  return (
    <div className="rightpanel">
      <NavBar/>
      <RoomList />
    </div>
  );
}

export default RightPanel;