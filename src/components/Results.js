import React, { Component } from 'react'
import Update from './Update'

class Results extends Component {
    // state = {
    //     movies: [],
    //     newMovie: {
    //         movieValue: '',
    //         yearValue: ''
    //     }
    // }

    componentDidMount () {
        console.log(this.props)
        let movie = this.props.movies.find(movie => {
            return movie._id === this.props.movieId
        })
        console.log(movie)
    }

    render() {
        
        // let results = this.props.movies.map((movie, index) => {
        //     return (
        //         <div key={index} className='center'>
        //             <h4 className="movie-provider">{movie.providers[0]}</h4>
        //             <p className="movie-name">{movie.name}</p>
        //             <p className="movie-year">{movie.year}</p>
        //         </div>
        //     )
        // })
        return (
            <div className="resultslist">
               {/* {results}
               <Update /> */}
            </div>
        )
    }
}

export default Results
