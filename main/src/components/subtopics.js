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
    <div className="mega-menu-container">
      <ul className="dropdown-menu mega-menu subtopic-container">
        {renderSubTopics()}
      </ul>
    </div>
  );
}

export default SubTopics;