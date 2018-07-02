import React from 'react';
import RoomCard from './room-card';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const SearchResults = (props) => {

  function renderRoomCards(roomArray) {
    return roomArray.map((data) => {
      return (<RoomCard data={data} />)
    })
  }

  return (
    <div className="results-container">
      {renderRoomCards(props.roomArray)}
    </div>
  );
};

export default SearchResults;