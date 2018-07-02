import React from 'react';
import { Input } from 'reactstrap';

class SearchOptions extends React.Component {

  
  render() {

    return (
      <div className="search-option-container">
        <div className="search-message">
          Around {this.props.results} results
        </div>
        <div className="spacer"></div>
        <Input type="select" name="select" id="sorting" onChange={(e) => {console.log(e.target.value)}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
      </div>
    );
  }
}

export default SearchOptions;