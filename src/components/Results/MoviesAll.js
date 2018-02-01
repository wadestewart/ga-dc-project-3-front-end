import React, { Component } from 'react'
import UpdateMovie from '../Forms/UpdateMovie'
import DeleteMovie from '../Forms/DeleteMovie'

class Results extends Component {
  componentDidMount () {
    console.log(this.props)
    let movie = this.props.movies.find(movie => {
      return movie._id === this.props.movieId
    })
    console.log(movie)
  }

  render () {
    let movie = this.props.movies.find(movie => {
      return movie._id === this.props.movieId
    })
    console.log(this.props)

    let results = <div className='center'>
      <p className='movie-name'>{movie.name}</p>
      <p className='movie-year'>{movie.year}</p>
      {/* do something with movie.providers */}
    </div>

    return (
      <div className='resultslist'>
        {results}
        <UpdateMovie updateSubmit={this.props.updateSubmit} movieId={movie._id} />
        <DeleteMovie deleteSubmit={this.props.deleteSubmit} movieId={movie._id} />
        {/* <p>Results component has rendered</p> */}
      </div>
    )
  }
}

export default Results
