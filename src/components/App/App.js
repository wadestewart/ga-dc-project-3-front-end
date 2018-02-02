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
import Test from '../Test'
import MovieSingle from '../Results/MovieSingle'
import MoviesAll from '../Results/MoviesAll'
import './App.css'

class App extends Component {
  state = {
    movies: [],
    providers: [],
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

  submitUpdate = (e, inputObj) => {
    e.preventDefault()
    inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
    updateMovie(inputObj)
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data
        }), _ => {
          console.log(this.state)
          this.forceUpdate()
        })
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
    console.log(this.state)
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
        <Switch>
          {/* /movies/results/:id */}
          <Route
            path='/movies/results/:id'
            render={(props) => (
              <div>
                {this.state.isMatch &&
                  <Redirect to={`/movies/results/${this.state.matchId}`} />
                }
                <MovieSingle
                {...props}
                resetMatch={this.resetMatch}
                matchId={this.state.matchId}
                getMovie={getMovie}
              />
              </div>
              
            )}
          />

          {/* /movies/results */}
          <Route
            path='/movies/results'
            render={(props) => (
              <MoviesAll
                {...props}
                moviesData={this.state.movies}
              />
            )}
          />
          {/* /movies/create */}

          {/* /test */}
          <Route
            path='/test'
            render={(props) => (
              <Test
                {...props}
              />
            )
            }
          />

          {/* /* */}
          {/* <Route
            path='/*'
            render={_ => <Redirect to='/' />}
          /> */}

          {/* / */}
          <Route
            path='/'
            render={(props) => (
              <div>
                <SearchMovie
                  handleSearchInput={this.handleSearchInput}
                  submitSearch={this.submitSearch}
                />
                <Link to='/movies/results'>All Movies</Link>
                {this.state.isMatch &&
                  <Redirect to={`/movies/results/${this.state.matchId}`} />
                }
              </div>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
