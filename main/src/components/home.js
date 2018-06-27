import React, { Component } from 'react';
import LeftPanel from './leftpanel'
import RightPanel from './rightpanel'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <LeftPanel />
        <RightPanel />
      </div>
    );
  }
}

export default Home;