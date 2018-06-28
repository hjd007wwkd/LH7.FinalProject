import React, { Component } from 'react';
import Topics from './topics';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicPool: databaseTopics,
      selectedTopic: 'home'
    };
    this.changeTopic = this.changeTopic.bind(this);
  }

  changeTopic(e) {
    this.setState({
      selectedTopic: e.target.text
    })
  }

  getTopics() {
    const topicArray = [];
    this.state.topicPool.map((data) => {
      if(!topicArray.includes(data.topic)) {
        topicArray.push(data.topic);
      }
    })
    return topicArray;
  }

  // leave commented for possible later implementation
  // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topics">
  //   <i class="fas fa-bars"></i>
  // </button>
  
  render() {
    return (
      <div className="pos-f-t navbar-container">
        <Topics topics={this.getTopics()} changeTopic={this.changeTopic} topicPool={this.state.topicPool}/>
      </div>
    );
  }
}

export default NavBar;

const databaseTopics = [ 
  {topic: 'Tech', subtopic: 'Big 5'},
  {topic: 'Tech', subtopic: 'Big Data'},
  {topic: 'Tech', subtopic: 'Startups'},
  {topic: 'Tech', subtopic: 'Gadgets'},
  {topic: 'Tech', subtopic: 'Software'},
  {topic: 'Tech', subtopic: 'Hardware'},
  {topic: 'Tech', subtopic: 'Ideas'},
  {topic: 'Tech', subtopic: 'Science'},
  {topic: 'Tech', subtopic: 'Security'},
  {topic: 'Tech', subtopic: 'Transportation'},
  {topic: 'Tech', subtopic: 'Culture'},

  {topic: 'Sports', subtopic: 'NBA'},
  {topic: 'Sports', subtopic: 'NFL'},
  {topic: 'Sports', subtopic: 'NHL'},
  {topic: 'Sports', subtopic: 'MLB'},
  {topic: 'Sports', subtopic: 'FIFA'},
  {topic: 'Sports', subtopic: 'Tennis'},
  {topic: 'Sports', subtopic: 'Rugby'},
  {topic: 'Sports', subtopic: 'World Cup'},

  {topic: 'Finance', subtopic: 'General Market News'},
  {topic: 'Finance', subtopic: 'Stocks'},
  {topic: 'Finance', subtopic: 'Rates & Bonds'},
  {topic: 'Finance', subtopic: 'Currencies'},
  {topic: 'Finance', subtopic: 'Futures'},
  {topic: 'Finance', subtopic: 'ETFs'},
  {topic: 'Finance', subtopic: 'Commodities'},

  {topic: 'Politics', subtopic: 'International'},
  {topic: 'Politics', subtopic: 'US'},
  {topic: 'Politics', subtopic: 'China'},
  {topic: 'Politics', subtopic: 'Europe'},
  {topic: 'Politics', subtopic: 'Canada'},
  {topic: 'Politics', subtopic: 'England'},
  {topic: 'Politics', subtopic: 'Russia'},
  {topic: 'Politics', subtopic: 'Middle East'}
]