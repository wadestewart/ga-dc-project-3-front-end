import React, { Component } from 'react'
import {
  deleteMovie
} from '../../Utility'

class DeleteMovie extends Component { // might call this DeleteMovieButton, since it is a little more concrete in terms of a part of a UI
  state = {}

  submitDelete = (inputObj) => {
    deleteMovie(inputObj)
      .then(_ => {
        this.props.setMoviesState()
        this.props.history.push('/')
      })
  }

  render () {
    return (
      <div className='deleteButton center'>
        <button className='center btn waves-effect waves-light red color black' value='Delete' onClick={(e) => {
          e.preventDefault()
          this.submitDelete({movieId: this.props.movieId})
        }}>
          {'Delete'}
        </button>
      </div>
    )
  }
}

export default DeleteMovie
