import React, { Component } from 'react';
import { Link } from 'react-router';

import {Menu} from './Menu'
import LoginButtons from './LoginButtons'

class SideBar extends Component {
    constructor(props){
      super()
      this.state = {
          windowWidth: window.innerWidth,
          sidebarClass: 'sidebar'
      }
    }

    handleResize(e) {
      const winWidth = window.innerWidth
      const maxWidth = 950

      if(winWidth >= maxWidth){
       this.props.showMenu()
      }else{

      }

      this.setState({
      windowWidth: window.innerWidth
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this))

    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this))
    }

    render () {

      return (
        <div className={this.props.sideBar}>
          <div className="moviedb">
            <div className="login-user-mobile">
              <LoginButtons
              loggedIn={this.props.loggedIn}
              openModalLogin={this.props.openModalLogin}
              openModalRegister={this.props.openModalRegister}
              handleLogOut={this.props.handleLogOut}
              />
            </div>
            <div className="sidebar-title">
              <h2><Link onlyActiveOnIndex to="/"><i className="material-icons">
home
</i>Watchlist</Link></h2>
            </div>
            <div className="watchlist-title">
              <h2>My movies</h2>
            </div>
            <div className="watchlist">
              <ul>
                {this.props.watchList.map((movie)=>{
                  return (
                  <li className="watchlist-module" key={movie.id}>

                    <p
                      onClick={() => this.props.removeMovie(movie.id)}>
                      <i className="material-icons">
  check_box
  </i>
                      <Link to={`/${movie.id}`}>
                        {movie.title}
                      </Link>
                    </p>



                  </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )
    }
}

export default SideBar;
