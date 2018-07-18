import React, { Component } from 'react';
import {auth} from './auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  constructor(props){
    super();
    this.state = { registerError: null }
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .then(()=>{this.props.closeModal();})
      .catch(e => this.setState(setErrorMsg(e)))
  }
  handleCloseModal () {
    this.props.closeModal();
  }

  render () {
    return (
      <div className="auth-form">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="modal-warning" role="alert">
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="button">Register</button>
          <button onClick={this.handleCloseModal} className="button">Close</button>
        </form>
      </div>
    )
  }
}
