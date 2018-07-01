import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    if(username.length > 0 && email.length > 0 && password.length > 0) {
      this.props.socket.emit('register', username, email, password)
    }
    event.target.username.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
  }

  render() {
    return (
      <ul className="login nav">
        <li className="dropdown">
          <a href="#" data-toggle="dropdown"><b>Register</b></a>
          
          <ul id="register-dp" className="dropdown-menu">
            <li>
              <div className="row">
                
                <div className="col-md-12">
                  <h4>Register</h4>
                  <form onSubmit={this.handleSubmit} className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="register-nav">
                      
                      <div className="form-group">
                        <label className="sr-only" for="inputUsername">Username</label>
                        <input type="username" name="username" className="form-control" id="inputUsername" placeholder="Username" required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="inputEmailRegister">Email address</label>
                        <input type="email" name="email" className="form-control" id="inputEmailRegister" placeholder="Email address" required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="inputPasswordRegister">Password</label>
                        <input type="password" name="password" className="form-control" id="inputPasswordRegister" placeholder="Password" required />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-secondary btn-block">Create New Account</button>
                      </div>

                  </form>
                </div>

              </div>
            </li>
          </ul>

        </li>
      </ul>
    );
  }
}

export default Register;