import  React from 'react'

export const Menu = (props) =>
  <div className={props.menuClass} onClick={props.toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
  </div>
