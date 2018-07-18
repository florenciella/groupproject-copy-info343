import React, { Component } from 'react';
import { login, resetPassword } from './auth'

export default class Login extends Component {
  constructor(props){
    super();
    this.state = { loginMessage: null }
    
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .then(()=>{this.props.closeModal();})
      .catch((error) => {
          this.setState({loginMessage:'You need to register first.'})
        })
  }

  handleCloseModal () {
    this.props.closeModal();
  }

  render () {
    //log in with email
    return (
      <div className="auth-form">
        <div className='modal-header'>
          <h1>Login</h1>
          <i className="material-icons close"
             onClick={this.handleCloseModal}>
             close
          </i>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <div className='error'>
            <i>{this.state.loginMessage}</i>
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    )
  }
}
