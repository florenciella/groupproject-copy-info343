import React, { Component } from 'react';

class Modal extends Component {
  close = (e) => {
    e.preventDefault()

    if (this.props.onClose) {
    this.props.onClose()
    }
  }

  render() {
      let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999', // stacks on top
        background: '#fff'
      }

      return (
        <div className={this.props.containerClassName}>
            <div className={this.props.className} style={modalStyle}>
                {this.props.children}
            </div>
            {!this.props.noBackdrop &&
                <div className={this.props.backdropClassName}
                    onClick={this.close}/>}
        </div>
      )
  }

}

export default Modal;
