import React, { Component } from 'react'
import axios from 'axios'

class ResultsContainer extends Component {
    state = {
        movies: [],
        newMovie: {
          movieValue: '',
          yearValue: ''
        }
    }

    componentDidMount = () => {
        axios.get('https://sheltered-dawn-94402.herokuapp.com/movies')
          .then(response => {
            console.log(response)
            this.setState({ movies: response.data })
        })
    }

    render () {
        let movies = this.state.movies.map((movie, index) => {
            return <div key={index} className='center'>
                    <h4 className="movie-name">{movie.name}</h4>
                    <p className="movie-year">{movie.year}</p>
                    <p className="movie-provider">{movie.provider}</p>
                </div>
        })
        
        return (
            <h2>{movies}</h2>
        )


    }
}

export default ResultsContainer
