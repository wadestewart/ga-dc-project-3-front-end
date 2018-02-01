import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {
  getProviders,
  getMovies,
  postMovie,
  getMovie,
  updateMovie,
  deleteMovie
} from '../../Utility'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    movies: [],
    providers: [],
    matchId: ''
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
    postMovie(inputObj)
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
    getMovies()
      .then(movies => {
        getProviders()
          .then(providers => {
            this.setState(prevState => ({
              movies: movies.data,
              providers: providers.data
            }),_ =>  console.log(this.state))
          })
      })
  }

  render () {
    return (
      <div className='App'>
        {/* TODO header placeholder here */}
        {/* TODO search(container?) placeholder here */}
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
