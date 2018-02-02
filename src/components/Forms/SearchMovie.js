import React, { Component } from 'react'

import { getMovies } from '../../Utility'


class SearchMovie extends Component {
  state = {
    movies: [],
    searchInput: '',
    isMatch: false,
    matchId: ''
  }

  resetMatch = _ => {
    this.setState({
      searchInput: '',
      isMatch: false,
      matchId: ''
    })
  }

  handleSearchInput = e => {
    this.setState({
      searchInput: e.target.value,
    }) 
  }

  submitSearch = e => {
    e.preventDefault()
    let searchMovieIndex = this.state.movies.findIndex(movie => {
      return movie.name === this.state.searchInput
    })

    if (searchMovieIndex !== -1) {
      this.setState(prevState => ({
        isMatch: true,
        matchId: this.state.movies[searchMovieIndex]._id
      }), _ => console.log(this.state))
    }
  }

  componentDidMount () {
    console.log(this.state)
    getMovies()
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data
        }), _ => console.log(this.state))
      })
  }

  render () {
    return (
      <form
        className='forms'
        onSubmit={this.submitSearch}
      >
        <input
          type='text'
          placeholder='Search for Movie'
          onChange={this.handleSearchInput}
        />
        <button
          className='waves-effect waves-light grey'
          type='submit'
        >
        Search
        </button>
      </form>
    )
  }
}

// const SearchMovie = ({ handleSearchInput, submitSearch }) => {
//   return (
    // <form
    //   className='forms'
    //   onSubmit={submitSearch}
    // >
    //   <input
    //     type='text'
    //     placeholder='Search for Movie'
    //     onChange={handleSearchInput}
    //   />
    //   <button
    //     className='waves-effect waves-light grey'
    //     type='submit'
    //   >
    //   Search
    //   </button>
    // </form>
//   )
// }

export default SearchMovie
