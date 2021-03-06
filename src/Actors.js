import  React from 'react'

export const Actors = (props) =>
  <div className="actors">
  <h4 className="info-title">Cast Members</h4>
      <hr></hr>
      {props.stars.map(function(star, i){
        if (i <= 4){
          return(
            <div className="actor" key={i}>
              <div className="actor-image">
                {
                  (star.profile_path === null)
                  ? <div className="blank-profile" style={props.blankPerson}></div>
                  : <img className="movie-profile-img" src={
                  `https://image.tmdb.org/t/p/w66_and_h66_bestv2/${star.profile_path}`
                  }  alt={star.name}/>
                }
              </div>
              <div className="profile-name">
                <p className="actor-name name-title">{star.name}</p>
                <p className="character name-title-sub">as {star.character}</p>
              </div>
            </div>
          )
        }else{
          return false
        }
      })}
  </div>
