import React, { Component } from 'react'
import {queryMovie} from './Utility'
import Search from './Search'
import Results from './Results'
// import axios from 'axios'

class SearchContainer extends Component {
    state = {
        query: '',
        searched: false,
        movies: [],
        newMovie: {
          movieValue: '',
          yearValue: ''
        }
    }

    userSearch = (input) => {
        this.setState({
            query: input.target.value
        })
        // }, _ => console.log(this.state.query))
        
    }

    searchSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.movies)
        queryMovie()
            .then((movies) => {
                // console.log(movies.data)

                let matchingMovieIndex = movies.data.findIndex(movie => {
                    return movie.name === this.state.query 
                })

                console.log(movies.data[matchingMovieIndex])
                // this.setState(prevState => ({
                //     // searched: !prevState.searched,
                //     // movies: prevState.movies.push(movies.data[matchingMovieIndex])
                //     movies: prevState.movies.push(movies.data[matchingMovieIndex])
                // }), _ => console.log(this.state))
                this.setState(prevState => {
                    prevState.movies.push(movies.data[matchingMovieIndex])
                    return {searched: !prevState.searched}
                }, _ => console.log(this.state))
            })
    }

    // componentDidMount = () => {
    //     axios.get('https://sheltered-dawn-94402.herokuapp.com/movies')
    //       .then(response => {
    //         console.log(response)
    //         this.setState({ movies: response.data })
    //     })
    // }

    render () {
        return (
            <div className="">
                {
                    this.state.searched ?
                    <Results 
                        movies={this.state.movies} /> :
                    <Search 
                        userSearch={this.userSearch}
                        query={this.state.query}
                        searchSubmit={this.searchSubmit} />
                }
            </div>
        )


    }
}

export default SearchContainer
