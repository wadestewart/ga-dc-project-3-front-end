import React, { Component } from 'react'
import Movie from '../subcomponents/Movie'
import SearchMovie from '../Forms/SearchMovie'
import UpdateMovie from '../Forms/UpdateMovie'
import DeleteMovie from '../Forms/DeleteMovie'

// const MovieSingle = ({ movieData }) => {
//   return (
//     <div className='container-result'>
//       <Movie movieData={movieData} />
//       <div className='container-forms'>
//         <UpdateMovie movieData={movieData} />
//         <DeleteMovie movieData={movieData} />
//       </div>
//     </div>
//   )
// }

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
        {this.state.movie && <Movie movieData={this.state.movie} />}
        <button onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}

export default MovieSingle
