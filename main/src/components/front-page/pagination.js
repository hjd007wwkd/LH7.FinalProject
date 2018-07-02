import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Example extends React.Component {

  renderButtons() {
    const paginationArray = [];
    for(let i = 1; i < this.props.pages + 1; i++) {
      paginationArray.push(
        <PaginationItem>
          <PaginationLink id={i} onClick={this.props.handleClick} href="#">
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return paginationArray;
  }

  render() {
    return (
      <Pagination className="pagination-container">
        {this.renderButtons()}
      </Pagination>
    );
  }
}