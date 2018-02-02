import React, { Component } from 'react'
import Movie from '../subcomponents/Movie'
import SearchMovie from '../Forms/SearchMovie'
import UpdateMovie from '../Forms/UpdateMovie'
import DeleteMovie from '../Forms/DeleteMovie'

class MovieSingle extends Component {
  state = {
    movie: undefined
  }

  handleBack = _ => {
    this.props.resetMatch()
    this.props.history.push('/')
  }

  componentDidMount () {
    this.props.resetMatch()
    this.props.getMovie({movieId: this.props.match.params.id})
      .then(movie => {
        this.setState(prevState => ({
          movie: movie.data
        }), _ => console.log(this.state))
      })
  }

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
          />
          <DeleteMovie
            {...this.props}
            movieId={this.props.match.params.id}
            submitDelete={this.props.submitDelete}
          />
        </div>
        }
        <button onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}

export default MovieSingle
