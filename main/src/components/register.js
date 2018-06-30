import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
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
                  <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="register-nav">
                      
                      <div className="form-group">
                        <label className="sr-only" for="inputUsername">Username</label>
                        <input type="username" className="form-control" id="inputUsername" placeholder="Username" required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="inputEmailRegister">Email address</label>
                        <input type="email" className="form-control" id="inputEmailRegister" placeholder="Email address" required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="inputPasswordRegister">Password</label>
                        <input type="password" className="form-control" id="inputPasswordRegister" placeholder="Password" required />
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