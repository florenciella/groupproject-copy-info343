import  React from 'react'

export const MoviePoster = (props) =>
  <div className="movie-poster">
      {
      (!props.poster)
      ? <div className="movie-poster-blank"></div>
      : <img className="movie-poster-img"
          src={'https://image.tmdb.org/t/p/w500'+
          props.poster}
          alt={props.posterTitle}/>
      }
  </div>
