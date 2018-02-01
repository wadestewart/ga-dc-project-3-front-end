import React, { Component } from 'react'
import {
    queryMovie,
    updateMovie
} from './Utility'
import Search from './Search'
import Results from './Results'
import Update from './Update'
// import axios from 'axios'

class SearchContainer extends Component {
    state = {
        query: '',
        hasSearched: false,
        movies: [],
        movieMatchId: ''
    }

    userSearch = (e) => {
        this.setState({
            query: e.target.value,
        }) 
    }

    handleInput = (e, inputObj) => {
        
    }

    searchSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        let searchMovieIndex = this.state.movies.findIndex(movie => {
            return movie.name === this.state.query
        })

        if (searchMovieIndex !== -1) {
            this.setState(prevState => ({
                hasSearched: !prevState.hasSearched,
                movieMatchId: this.state.movies[searchMovieIndex]._id
            }), _ => console.log(this.state))
        }
    }

    updateSubmit = (e, inputObj) => {
        e.preventDefault()
        // console.log(inputObj)
        inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
        // console.log(inputObj)
        updateMovie(inputObj)
            // .then(movies => {
            //     this.setState(prevState => ({
            //         movies: movies.data
            //     }), _ => console.log(this.state))
            // })
    }

    componentDidMount = () => {
        queryMovie()
            .then(movies => {
                this.setState(prevState => ({
                    movies: movies.data
                }), _ => console.log(this.state))
            })
    }

    render () {
        return (
            <div className="">
                <Search 
                    userSearch={this.userSearch}
                    query={this.state.query}
                    searchSubmit={this.searchSubmit}
                />
                {
                    this.state.hasSearched
                    && <Results 
                        movies={this.state.movies}
                        movieId={this.state.movieMatchId} 
                        updateSubmit={this.updateSubmit}/>
                }
            </div>
        )
    }
}

export default SearchContainer
