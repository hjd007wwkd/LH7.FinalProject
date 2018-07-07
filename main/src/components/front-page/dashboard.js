import React from 'react';
import Background from '../../../public/images/newspaper.jpg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar(e) {
    if (e.key === 'Enter') {
      this.props.handleDashboard(e.target.value);
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}>
        <div className="dashboard-container" style={{'backgroundImage': `url('${Background}')`}}>
            <div className="dashboard">
              <h1><span className='capital_title'>N</span>ews<span className='capital_title'>W</span>atch</h1>
              <input type="text" onKeyPress={this.handleSearchBar} autofocus/>
            </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Dashboard;