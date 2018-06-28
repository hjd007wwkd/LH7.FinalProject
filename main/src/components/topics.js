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
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="">
              <p>{data}</p>
            </a>
            <SubTopics subtopics={subtopics} />
          </li>
        );
      })
    );
  }

  return (
    <div className="navbar-inner" id="topics">
      <ul className="nav nav-mega">
        {renderTopics()}
      </ul>
      <div className="flex-spacer"></div>
      <a className="home-user" href="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3h9oJ8Ovn42zpFAgZ-zTt-l95lEcHiTFnonCR9R0L1zTNKNv" alt="user"/>
      </a>
    </div>
  )
}


export default Topics;