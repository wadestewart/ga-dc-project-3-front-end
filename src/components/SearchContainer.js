import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'
import Post from './Post'

class SearchContainer extends Component {
  render () {
    return (
      <div className=''>
        <Search
          userSearch={this.userSearch}
          query={this.state.query}
          searchSubmit={this.searchSubmit}
        />
        {
          this.state.hasSearched &&
          <Results
            movies={this.state.movies}
            movieId={this.state.movieMatchId}
            updateSubmit={this.updateSubmit}
            deleteSubmit={this.deleteSubmit}
          />
        }
        <Post postSubmit={this.postSubmit} />
      </div>
    )
  }
}

export default SearchContainer
