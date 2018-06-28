import React from 'react';

const SubTopics = ({ subtopics }) => {

  const renderSubTopics = () => {
    return (
      subtopics.map((data) => {
        return (
          <li>
            <button type="button" class="btn btn-light">{data}</button>
          </li>
        );
      })
    );
  }

  return (
    <ul class="dropdown-menu mega-menu">
      <div className="subtopic-container">
        {renderSubTopics()}
      </div>

      <div className="subtopic-spacer"></div>
    </ul>
  );
}

export default SubTopics;