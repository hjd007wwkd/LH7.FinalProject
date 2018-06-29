import React from 'react';
import SubTopics from './subtopics';


const Topics = ({ topics, topicPool, changeTopic, changeSubtopic }) => {

  const getSubtopics = (topic) => {
    const subtopics = [];
    topicPool.map((data) => {
      if(data.topic === topic) {
        subtopics.push(data.subtopic)
      }
    })
    return subtopics;
  }
  
  const renderTopics = () => {
    return (
      topics.map((data) => {
        const subtopics = getSubtopics(data)
        return (
          <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" onClick={() => console.log('hi')}>
              {data}
            </a>
            <SubTopics subtopics={subtopics} />
          </li>
        );
      })
    );
  }

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <ul className="nav nav-mega">
          <li className="dropdown">
            <a href="/" className="dropdown-toggle" data-toggle="dropdown">
              Home
            </a>
          </li>
          {renderTopics()}
        </ul>
      </div>
    </div>
  )
}


export default Topics;