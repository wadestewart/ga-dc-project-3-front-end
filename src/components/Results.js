import React, { Component } from 'react'

class Results extends Component {
    // state = {
    //     movies: [],
    //     newMovie: {
    //         movieValue: '',
    //         yearValue: ''
    //     }
    // }

    componentDidMount () {
        console.log(this.props.movies)
    }

    render() {
        let results = this.props.movies.map((movie, index) => {
            return (
                <div key={index} className='center'>
                    <h4 className="movie-provider">{movie.providers[0]}</h4>
                    <p className="movie-name">{movie.name}</p>
                    <p className="movie-year">{movie.year}</p>
                </div>
            )
        })
        return (
            <div className="resultslist">
               {results}
            </div>
        )
    }
}

export default Results
