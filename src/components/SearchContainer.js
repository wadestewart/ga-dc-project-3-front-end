import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { queryMovie, updateMovie, createMovie, deleteMovie } from './Utility'
import Search from './Search'
import Results from './Results'
import Update from './Update'
import Post from './Post'
import Delete from './Delete'
import Header from './Header'

class SearchContainer extends Component {
    state = {
        query: '',
        hasSearched: false,
        movies: [],
        movieMatchId: ''
    }

    userSearch = e => {
        this.setState({
            query: e.target.value
        })
    }

    searchSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        let searchMovieIndex = this.state.movies.findIndex(movie => {
            return movie.name === this.state.query
        })

        if (searchMovieIndex !== -1) {
            this.setState(
                prevState => ({
                    hasSearched: !prevState.hasSearched,
                    movieMatchId: this.state.movies[searchMovieIndex]._id
                }),
                _ => console.log(this.state)
            )
        }
    }

    updateSubmit = (e, inputObj) => {
        e.preventDefault()
        // console.log(inputObj)
        inputObj.providersInput = inputObj.providersInput
            .split(',')
            .map(provider => provider.trim())
        // console.log(inputObj)
        updateMovie(inputObj).then(movies => {
            this.setState(
                prevState => ({
                    movies: movies.data
                }),
                _ => console.log(this.state)
            )
        })
    }

    postSubmit = (e, inputObj) => {
        e.preventDefault()
        inputObj.providersInput = inputObj.providersInput
            .split(',')
            .map(provider => provider.trim())
        console.log(inputObj)
        createMovie(inputObj).then(movies => {
            this.setState(prevState => ({
                movies: movies.data
            }))
        })
    }

    deleteSubmit = (e, inputObj) => {
        e.preventDefault()
        deleteMovie(inputObj).then(movies => {
            this.setState(prevState => ({
                movies: movies.data
            }))
        })
    }

    componentDidMount = () => {
        queryMovie().then(movies => {
            this.setState(
                prevState => ({
                    movies: movies.data
                }),
                _ => console.log(this.state)
            )
        })
    }

    render() {
        return (
            <Router>
                <div className="">
                    <Header />
                    <main>
                        <Switch>
                            <Route
                                path="/"
                                render={props => this.state.hasSearched 
                                      ? <Results
                                        {...props}
                                        movies={this.state.movies}
                                        movieId={
                                            this.state.movieMatchId
                                        }
                                        updateSubmit={this.updateSubmit}
                                        deleteSubmit={this.deleteSubmit} />
                                      : <Search
                                          {...props}
                                          userSearch={this.userSearch}
                                          query={this.state.query}
                                          searchSubmit={this.searchSubmit} />

                                }
                            />
                            <Route
                                c   path="/movies/Post"
                                render={() => {
                                    console.log('*****rendering the thing')
                                    return <Post />
                                }}
                            />
                            <Route
                                path="/movies/:id"
                                render={() =>
                                    <Results /> && <Update /> && <Delete />
                                }
                            />
                            {/* <Route
                      path='/movies' 
                      render={() => ({movies})} 
                    /> */}
                            {/* <Post postSubmit={this.postSubmit}/> */}
                        </Switch>
                    </main>
                </div> 
            </Router>
        )
    }
}

export default SearchContainer
