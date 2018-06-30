import React, { Component } from "react";

class Login extends Component {
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
          <a href="#" data-toggle="dropdown"><b>Log In<i className="fas fa-door-open"></i></b></a>
          
          <ul id="login-dp" className="dropdown-menu">
            <li>
              <div className="row">
                
                <div className="col-md-12">
                  <h4>Log In</h4>
                  <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                      
                      <div className="form-group">
                        <label className="sr-only" for="exampleInputEmail2">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" for="exampleInputPassword2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-secondary btn-block">Sign in</button>
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

export default Login;