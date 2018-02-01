import React, { Component } from 'react'
import Update from './Update'
import Delete from './Delete'

class Results extends Component {

    componentDidMount () {
        console.log(this.props)
        let movie = this.props.movies.find(movie => {
            return movie._id === this.props.movieId
        })
        console.log(movie)
    }

    render() {
        let movie = this.props.movies.find(movie => {
            return movie._id === this.props.movieId
        })
        console.log(this.props)
 
        let results = <div className='center'>
                        <p className="movie-name">{movie.name}</p>
                        <p className="movie-year">{movie.year}</p>
                        {/* do something with movie.providers */}
                    </div>
        
        return (
            <div className="resultslist">
               {results}
               <Update updateSubmit={this.props.updateSubmit} movieId={movie._id}/>
               <Delete deleteSubmit={this.props.deleteSubmit} movieId={movie._id}/>
               {/* <p>Results component has rendered</p> */}
            </div>
        )
    }
}

export default Results