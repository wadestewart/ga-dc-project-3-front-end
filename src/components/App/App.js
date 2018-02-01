import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import {
  queryMovie,
  updateMovie,
  createMovie,
  deleteMovie
} from '../../Utility'

// import Header from './components/Header'
// import SearchContainer from './components/SearchContainer'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    searchResults: {
      isMatch: false,
      matchId: ''
    },
    movies: [],
    providers: []
  }

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    }) 
  }

  searchSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let searchMovieIndex = this.state.movies.findIndex(movie => {
      return movie.name === this.state.query
    })

    if (searchMovieIndex !== -1) {
      this.setState(prevState => ({
        hasSearched: !prevState.hasSearched,
        movieMatchId: this.state.movies[searchMovieIndex]._id
      }), _ => console.log(this.state))
    }
  }

  updateSubmit = (e, inputObj) => {
    e.preventDefault()
    inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
    updateMovie(inputObj)
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data
        }), _ => console.log(this.state))
      })
  }

  postSubmit = (e, inputObj) => {
    e.preventDefault()
    inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
    createMovie(inputObj)
    .then(movies => {
      this.setState(prevState => ({
        movies: movies.data
      }))
    })
  }

  deleteSubmit = (e, inputObj) => {
    e.preventDefault()
    deleteMovie(inputObj)
    .then(movies => {
      this.setState(prevState => ({
        movies: movies.data
      }))
    })
  }

  componentDidMount () {
    queryMovie()
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data
        }), _ => console.log(this.state))
      })
  }

  render () {
    return (
      <div className='App'>
        {/* TODO header placeholder here */}
        {/* TODO search placeholder here */}
        <Switch>
          {/* /movies/results/:id */}
          {/* /movies/results */}
          {/* /movies/create */}
          {/* /* */}
          {/* / */}
        </Switch>
      </div>
    )
  }
}

export default App
