import React, { Component } from 'react'
import Movie from '../subcomponents/Movie'
import PostMovie from '../Forms/PostMovie'
import {
  getMovies
} from '../../Utility'

class MoviesAll extends Component {
  state = {
    movies: undefined
  }

  handleBack = _ => {
    this.props.history.push('/')
  }

  componentDidMount () {
    getMovies()
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data,
        }), _ => console.log(this.state))
      })
  }

  render () {
    let movies

    if (this.state.movies) {
      movies = this.state.movies.map((movie, index) => {
        return (
          <Movie movieData={movie} key={index} />
        )
      })
    }

    return (
      <div className='container-result'>
        {movies}
        <PostMovie
          {...this.props}
          setMovieState={this.props.setMovieState}
        />
        <button onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}

export default MoviesAll
