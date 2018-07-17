import React, { Component } from 'react';
import {addMovie, modifyText} from '../../lib/watchListHelpers'

import {MovieTitle} from './MovieTitle'
import {MoviePoster} from './MoviePoster'
import {Directors} from './Directors'
import {Actors} from './Actors'
import {Runtime} from './Runtime'


import './css/index.css'


class Movie extends Component {

  constructor(props){
    super();
    this.state = {
      movie: {
        "production_companies": [{}],
        "production_countries": [{}],
        "spoken_languages": [{}],
        "credits": {
          "cast": [{}],
          "crew": [{}]
        },
        "releases": {
          "countries": [{}]
        },
        "images": {
          "posters": [{}]
        },

        "videos": {
          "results": [{}]
        }
      },
        directors: []
      }
    }

  componentWillReceiveProps(nextProps){
    this.fetchMovie(nextProps.params.movieTitle)
  }

  fetchMovie(movieTitle) {
    fetch(`https://api.themoviedb.org/3/movie/${movieTitle}?api_key=c2d6b648cfb303b5ae02208a5c91d208&query&append_to_response=credits,releases,images,videos`)
    .then(res => res.json())
    .then((data)=>{
      return data
    }).then(
      movie => {
        this.setState({movie})
      }
    )
  }

   componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page

      fetch(`https://api.themoviedb.org/3/movie/${this.props.params.movieTitle}?api_key=c2d6b648cfb303b5ae02208a5c91d208&query&append_to_response=credits,releases,images,recommendations`)
      .then(res => res.json())
      .then((data)=>{
        return data
      })
      .then(
        movie => {
          this.setState({movie})
      })
    }


  watchLater = (e) => {
    e.preventDefault()

    const newMovie = {id: this.state.movie.id, title: this.state.movie.title, remove: false};

    const updatedWatchList = addMovie(this.props.watchList, newMovie)

    this.props.addToWatchList(updatedWatchList);

  }


  createGroupedArray = (arr, chunkSize) => {
    var groups = [], i;
      for (i = 0; i < arr.length; i += chunkSize) {
          groups.push(arr.slice(i, i + chunkSize));
      }
    return groups;
  }


  render() {

    let newDate = modifyText(`${this.state.movie.release_date}`, '-')



    return (
      <div className="movie">

        <div className="movie-header">
          <div className="movie-header-backdrop" ></div>
          <div className="movie-header-content">

            <MoviePoster
            poster={this.state.movie.poster_path}
            posterTitle={this.state.movie.original_title}
            />

            <div className="movie-header-info">

              <MovieTitle 
              title={this.state.movie.original_title}
              date={newDate}
              />

              <div className="movie-attributes">

                <Runtime 
                runtime={this.state.movie.runtime}
                />

                
              </div>
              
              <div className="plot">
                <p>{this.state.movie.overview}</p>
              </div>
              

              
              <div className="movie-watchBtn">
                <button onClick={this.watchLater} className="button">+ Add to Watchlist</button>
              </div>
           
            </div>
          </div>
        </div>

        <div className="movie-sub-content">
          <div className="movie-sub-credits">
            <div className="cast-group">
              
              <Directors
              directors={this.state.movie.credits.crew}
              />


            </div>
            
            <div className="cast-group">

              <Actors 
              stars={this.state.movie.credits.cast}
              />

            </div>
          
          </div>

        </div>

      </div>
    );
  }
}

export default Movie;
