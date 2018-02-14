import React, { Component } from 'react'
import Movie from '../Subcomponents/Movie'
import PostMovie from '../Forms/PostMovie'
import {
  getMovies
} from '../../Utility'

class MoviesAll extends Component {
  state = {
    movies: undefined //i'd use []
  }

  handleBack = _ => {
    this.props.history.push('/')
    // back should be this.props.history.pop()
  }

  componentDidMount () {
    getMovies()
      .then(movies => {
        this.setState(prevState => ({
          movies: movies.data,
        })) // might remove these console.logs in 'production'/master branch
      })
  }

  render () {
    let movies

    if (this.state.movies) { //If you make movies an empty array, you won't have to perform this erorr checking here
      movies = this.state.movies.map((movie, index) => (<Movie movieData={movie} key={index} />))
    }

    return (
      <div className='container-result'>
        {movies}
        <PostMovie
          {...this.props}
          setMovieState={this.props.setMovieState}
        />
        <button className="center btn waves-effect waves-light red color black" onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}

export default MoviesAll
