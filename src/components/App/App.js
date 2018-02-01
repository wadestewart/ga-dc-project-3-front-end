import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import {
  getMovies,
  updateMovie,
  postMovie,
  deleteMovie,
  getProviders
} from '../../Utility'

import Header from '../Header'
import SearchContainer from '../SearchContainer'
import PostMovie from '../Forms/PostMovie'

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
    return <div className="App">
            <Header />
            <SearchContainer />
            <Switch>
                {/* <Route 
                  path="/movies/results" 
                  render={props => {
                        return 
                        <MoviesAll 
                        {...props} movies={this.state.movies}
                        matchId={this.state.matchId}
                        />
                    }} 
                /> */}
                <Route 
                  path="/movies/create" 
                  render={props => {
                        return 
                        <PostMovie 
                        {...props} postSubmit={this.state.postSubmit}
                        />
                    }} 
                />
                {/* <Route 
                  path="/movies/results/:id" 
                  render={props => {
                        return 
                        <MoviesAll 
                        {...props} ={(data, language) => this.setTranslation(data, language)} />
                    }} 
                /> */}
                            
                <Route 
                  path="/*" 
                  render={props => {
                        return 
                        <SearchContainer 
                        {...props} handleSearchInput={this.handleSearchInput}
                        searchSubmit={this.handleSearchInput}
                        />
                    }} 
                />
                <Route 
                  path="/" 
                  render={props => {
                        return 
                        <SearchContainer 
                        {...props} handleSearchInput={this.handleSearchInput}
                        searchSubmit={this.handleSearchInput}
                        />
                    }} 
                />

                {/* [] /movies/results/:id */}
                {/* [X] /movies/results */}
                {/* [X] /movies/create */}
                {/* [X] /* */}
                {/* [X] / */}
            </Switch>
        </div>
  }
}

export default App
