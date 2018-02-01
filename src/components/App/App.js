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

import Header from '../Header'
import SearchMovie from '../Forms/SearchMovie'
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

  submitSearch = (e) => {
    e.preventDefault()
    console.log(this.state)
    let searchMovieIndex = this.state.movies.findIndex(movie => {
      return movie.name === this.state.searchInput
    })

    if (searchMovieIndex !== -1) {
      this.setState(prevState => ({
        matchId: this.state.movies[searchMovieIndex]._id
      }), _ => console.log(this.state))
    }
  }

  submitUpdate = (e, inputObj) => {
    e.preventDefault()
    inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
    updateMovie(inputObj)
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data
        }), _ => console.log(this.state))
      })
  }

  submitPost = (e, inputObj) => {
    e.preventDefault()
    inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
    postMovie(inputObj)
    .then(movies => {
      this.setState(prevState => ({
        movies: movies.data
      }))
    })
  }

  submitDelete = (e, inputObj) => {
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
        <Header />
        <SearchMovie
          handleSearchInput={this.handleSearchInput}
          submitSearch={this.submitSearch}
        />
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
