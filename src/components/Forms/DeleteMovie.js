import React, { Component } from 'react'

class DeleteMovie extends Component {
  render () {
    return (
      <div className='deleteButton center'>
        <button className=' center btn waves-effect waves-light' value='Delete' onClick={(e) => {
          this.props.submitDelete(e, {movieId: this.props.movieId})
          this.props.history.push('/')
        }}>
          {'Delete'}
        </button>
      </div>
    )
  }
}

export default DeleteMovie
