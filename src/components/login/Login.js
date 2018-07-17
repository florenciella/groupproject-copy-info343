import React, { Component } from 'react';
import { login, resetPassword } from '../../lib/auth'


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  constructor(props){
    super();
  }
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .then(()=>{this.props.closeModal();})
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }

  render () {
    //log in with email 
    return (
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            //Alerts the user if the password is wrong
            <div className="modal-warning" role="alert"> 
              <span className="sr-only">Error: Invalid Username/Password</span>
              &nbsp;{this.state.loginMessage} 
            </div>
          }
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    )
  }
}




