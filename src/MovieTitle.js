import  React from 'react'

export const MovieTitle = (props) =>
  <div className="movie-title">
    <h1>{props.title}
      <h2 className="year">
        ( {props.date} )
      </h2>
    </h1>
  </div>
