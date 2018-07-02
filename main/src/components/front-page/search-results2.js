import React from 'react';
import RoomCard from './room-card';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const SearchResults = (props) => {

  function renderRoomCards() {
    const n = new Array(20);
    return n.fill(0, 0, n.length).map(() => {
      return (<RoomCard />)
    })
  }

  return (
    <div className="results-container">
      {renderRoomCards()}
    </div>
  );
};

export default SearchResults;