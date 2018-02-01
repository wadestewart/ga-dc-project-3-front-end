import React, { Component } from 'react'
import SearchMovie from './Forms/SearchMovie'
import MoviesAll from './Results/MoviesAll'
import PostMovie from './Forms/PostMovie'

class SearchContainer extends Component {
  render () {
    return (
      <div className=''>
        <SearchMovie
          handleSearchInput={this.handleSearchInput}
          searchInput={this.state.searchInput}
          searchSubmit={this.searchSubmit}
        />
        {
          this.state.hasSearched &&
          <MoviesAll
            movies={this.state.movies}
            movieId={this.state.movieMatchId}
            updateSubmit={this.updateSubmit}
            deleteSubmit={this.deleteSubmit}
          />
        }
        <PostMovie postSubmit={this.postSubmit} />
      </div>
    )
  }
}

export default SearchContainer
