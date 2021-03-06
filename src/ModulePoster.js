import  React from 'react'

export const ModulePoster = (props) =>
  <div className="module-poster">
      {
      (props.moviePoster === null)
      ? <div className="module-poster-img-placeholder"></div>
      : <img className="module-poster-img" src={`https://image.tmdb.org/t/p/w185${props.moviePoster}`} alt={props.movieTitle}/>
      }
  </div>
