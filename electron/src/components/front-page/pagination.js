import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = ({ pages, handleClick }) => {
  const paginationArray = [];
  for(let i = 1; i < pages + 1; i++) {
    paginationArray.push(
      <PaginationItem>
        <PaginationLink id={i} onClick={handleClick} href="#">
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination className="pagination-container">
      {paginationArray}
    </Pagination>
  );
}

export default Example;