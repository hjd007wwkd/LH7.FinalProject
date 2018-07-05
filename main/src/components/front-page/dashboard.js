import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchBar = this.handleSearchBar.bind(this);
    }

    handleSearchBar(e){
        if (e.key === 'Enter'){
            this.props.handleDashboard(e.target.value)
        }
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard">
                    <h1><span className='first-letter'>N</span>ews<span className='second-letter'>W</span>atch</h1>
                    <input type="text" onKeyPress={this.handleSearchBar}/>
                </div>
            </div>
        )
    }
}

export default Dashboard;