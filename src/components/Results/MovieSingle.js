import React, { Component } from 'react'
import Movie from '../subcomponents/Movie'
import UpdateMovie from '../Forms/UpdateMovie'
import DeleteMovie from '../Forms/DeleteMovie'
import {
  getMovie,
  updateMovie,
  deleteMovie
} from '../../Utility'

class MovieSingle extends Component {
  state = {
    movie: undefined,
    isFirstRender: false
  }

  handleBack = _ => {
    this.props.history.push('/')
  }

  // submitUpdate = (e, inputObj) => {
  //   e.preventDefault()
  //   inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
  //   updateMovie(inputObj)
  //     .then(movies => {
  //       this.setState(prevState => ({
  //         movies: movies.data
  //       }), _ => {
  //         console.log(this.state)
  //         this.forceUpdate()
  //       })
  //     })
  // }

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
    getMovie({movieId: this.props.match.params.id})
      .then(movie => {
        this.setState(prevState => ({
          movie: movie.data,
          isFirstRender: true
        }), _ => console.log(this.state))
      })
  }

  // shouldComponentUpdate () {
  //   if (this.state.movie && this.state.isFirstRender) {
  //     return this.props.match.params.id !== this.state.movie._id
  //   } else return false
  // }

  // componentDidUpdate () {
  //   getMovie({movieId: this.props.match.params.id})
  //     .then(movie => {
  //       this.setState(prevState => ({
  //         movie: movie.data
  //       }), _ => console.log(this.state))
  //     })
  // }

  render () {
    return (
      <div>
        {this.state.movie && 
        <div>
          <Movie movieData={this.state.movie} />
          <UpdateMovie
            {...this.props}
            movie={this.state.movie}
            movieId={this.props.match.params.id}
            setMovieState={this.props.setMovieState}
          />
          <DeleteMovie
            {...this.props}
            movieId={this.props.match.params.id}
            submitDelete={this.submitDelete}
          />
        </div>
        }
        <button onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}

export default MovieSingle
