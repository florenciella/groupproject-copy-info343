import React, { Component } from 'react';
import searchIcon from './search.svg'


class MovieSearch extends Component {
    constructor(props){
      super()

    }

    render () {

        return (
            <div className="search-field">
              <i className="material-icons">
search
</i>
              <form>
                  <input type="text"
                  onChange={this.props.updateSearch}
                  value={this.props.searchValue}
                  placeholder="Search movies..."
                  />
              </form>
            </div>
        )
    }
}

export default MovieSearch;
