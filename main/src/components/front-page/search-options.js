import React from 'react';
import { Input } from 'reactstrap';

class SearchOptions extends React.Component {

  
  render() {

    return (
      <div className="search-option-container">
        <div className="search-message">
          Displaying results {this.props.data.first} to {this.props.data.last} (out of {this.props.results})
        </div>
      </div>
    );
  }
}

export default SearchOptions;