import React from 'react';
import SubTopics from './subtopics';


const Topics = ({ topics, changeTopic, topicPool }) => {

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
          <li class="dropdown">
            <a href="" class="dropdown-toggle" data-toggle="dropdown">
              {data}
            </a>
            <SubTopics subtopics={subtopics} />
          </li>
        );
      })
    );
  }

  return (
    <div class="navbar">
      <div class="navbar-inner">
        <ul class="nav nav-mega">
          {renderTopics()}
        </ul>
      </div>
    </div>
  )
}


export default Topics;