import React from 'react';
import RoomCard from './room-card';
import Pagination from './pagination';

const SearchResults = ({ roomArray, pages, handleClick, user }) => {
  return (
    <React.Fragment>
      <div className="results-container">
        {roomArray.map((data, index) => {
          return <RoomCard key={index} data={data} user={user}/>;
        })}
      </div>
      <Pagination pages={pages} handleClick={handleClick} />
    </React.Fragment>
  );
};

export default SearchResults;