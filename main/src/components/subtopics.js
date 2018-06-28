import React from 'react';

const SubTopics = ({ subtopics }) => {

  const renderSubTopics = () => {
    return (
      subtopics.map((data) => {
        return (
          <button type="button" class="btn btn-light">{data}</button>
        );
      })
    );
  }

  return (
    <div className="subtopic-container collapse" id="subtopics">
       {renderSubTopics()}
    </div>
  )
}

export default SubTopics;