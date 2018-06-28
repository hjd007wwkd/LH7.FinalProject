import React from 'react';


const Topics = ({ topics, changeTopic }) => {
  
  const renderTopics = () => {
    return (
      topics.map((data) => {
        return (
          <a class="nav-item nav-link" onClick={changeTopic} data-toggle="collapse" data-target="#subtopics" href="">
            {data}
          </a>
        );
      })
    );
  }

  return (
    <div className="topic-container collapse navbar-expand-lg" id="topics">
      <div class="nav nav-tabs">
        {renderTopics()}
      </div>
    </div>
  )
}


export default Topics;