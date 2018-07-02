import React from 'react';
import RoomCard from './room-card';
import Pagination from './pagination';

const SearchResults = (props) => {

  function renderRoomCards(roomArray) {
    return roomArray.map((data) => {
      return (<RoomCard data={data} />)
    })
  }

  return (
    <React.Fragment>
      <div className="results-container">
        {renderRoomCards(props.roomArray)}
      </div>
      <Pagination />
    </React.Fragment>
    
  );
};

export default SearchResults;