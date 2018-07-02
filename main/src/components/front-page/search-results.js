import React from 'react';
import RoomCard from './room-card';
import Pagination from './pagination';

class SearchResults extends React.Component {
  renderRoomCards(roomArray) {
    return roomArray.map((data, index) => {
      return <RoomCard key={index} data={data} />;
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="results-container">
          {this.renderRoomCards(this.props.roomArray)}
        </div>
        <Pagination pages={this.props.pages} handleClick={this.props.handleClick} />
      </React.Fragment>
    );
  }
};

export default SearchResults;