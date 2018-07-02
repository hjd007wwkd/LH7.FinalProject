import React, { Component } from 'react';

class SubTopics extends Component {
  renderSubTopics() {
    return (
      this.props.subtopics.map((data) => {
        return (
          <li>
            <button type="button" className="btn btn-light subtopic-btn">{data}</button>
          </li>
        );
      })
    );
  }

  componentDidMount() {
    for(let elem of document.getElementsByClassName('subtopic-btn')) {
      elem.addEventListener('click', this.props.changeSubtopic)
    }
  }

  render() {
    return (
      <ul class="dropdown-menu mega-menu">
        <div className="subtopic-container">
          {this.renderSubTopics()}
        </div>
        <div className="subtopic-spacer"></div>
      </ul>
    );
  }
}

export default SubTopics;