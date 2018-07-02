import React, { Component } from "react";

class CreateRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: 'Tech'
    };

    this.changeTopic = this.changeTopic.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const subtopic = e.target.elements.subtopic.value.trim();
    const roomname = e.target.elements.roomname.value.trim();
    const image = e.target.elements.image.value.trim();
    if(subtopic && roomname) {
      this.props.socket.emit('createRoom', subtopic, roomname, image, this.props.username)
      document.getElementsByClassName("modal-backdrop")[0].style.visibility = "hidden";
    }
  }

  renderTopicsDropdown() {
    return this.props.topics.map((data) => {
      return (
        <option value={data}>{data}</option>
      );
    })
  }

  renderSubtopicsDropdown() {
    const subtopics = this.props.topicPool.map((data) => {
      if (data.topic === this.state.currentTopic) {
        return <option value={data.subtopic}>{data.subtopic}</option>
      }
    })

    return (
      <select id="select-subtopic" class="form-control form-control-sm" name="subtopic">
        {subtopics}
      </select>
    )
  }

  changeTopic(e) {
    this.setState({
      currentTopic: e.target.value
    })
  }

  render() {
    return (
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h4 className="modal-title">Create New Room</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <form onSubmit={this.handleSubmit} className="form" role="form" accept-charset="UTF-8">

              <div className="modal-body">

                  <h6>Topic:</h6>
                  <select className="form-control form-control-sm" onChange={this.changeTopic} name="topic">
                    {this.renderTopicsDropdown()}
                  </select>
                  <br />

                  <h6>Subtopic:</h6>
                  {this.renderSubtopicsDropdown()}
                  <br />

                  <h6>Room Image:</h6>
                  <input type="text" className="form-control" placeholder="Room Image URL" name="image" required />
                  <br />

                  <h6>Room Name:</h6>
                  <input type="text" className="form-control" placeholder="Channel Name" name="roomname" required />

              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CreateRoom;