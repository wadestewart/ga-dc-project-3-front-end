import React, { Component } from 'react'
import {queryMovie} from './Utility'
import Search from './Search'
import Results from './Results'
import Update from './Update'
// import axios from 'axios'

class SearchContainer extends Component {
    state = {
        query: '',
        formInput: {},
        hasSearched: false,
        movies: [],
        movieMatchId: ''
    }

    userSearch = (e) => {
        this.setState({
            query: e.target.value,
        }) 
    }

    searchSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        let isMatch = false
        let searchMovieIndex = this.state.movies.findIndex(movie => {
            return movie.name === this.state.query
        })

        // if (searchMovie !== -1) isMatch = !isMatch
        // console.log(isMatch)

        if (searchMovieIndex !== -1) {
            this.setState(prevState => ({
                hasSearched: !prevState.hasSearched,
                movieMatchId: this.state.movies[searchMovieIndex]._id
            }), _ => console.log(this.state))
        }
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
                {
                    this.state.hasSearched
                    ? <Results 
                        movies={this.state.movies}
                        movieId={this.state.movieMatchId} />
                    : <div>
                        <Update 
                        userSearch={this.userSearch}
                        query={this.state.query}
                        searchSubmit={this.searchSubmit} />
                    <Search 
                        userSearch={this.userSearch}
                        query={this.state.query}
                        searchSubmit={this.searchSubmit} />
                    </div>
                }
            </div>
        )
    }
}

export default SearchContainer
