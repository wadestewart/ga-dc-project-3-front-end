import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        movies: [],
        newMovie: {
          movieValue: '',
          yearValue: ''
        }
    }

    handleChange = (event) => {
        let newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    handlePost = (event) => {
        console.log('A movie was submitted: ' + this.state.movieValue)
        console.log('A year was submitted: ' + this.state.yearValue)
        let sendName = this.state.movieValue
        let sendYear = Number(this.state.yearValue)
        event.preventDefault()
        axios
            .post(
            'https://sheltered-dawn-94402.herokuapp.com/movies', 
            { name: sendName, year: sendYear, providers: "Netflix, HBO Now" }
            )
            .then(response => {
                console.log('response from POST', response.data)
                // the response from the POST request handling method on the express side - REQ.BODY
                // the response will be the thing just created in the db
                this.setState(prevState => {
                    return {
                    movies: [...prevState.movies, response.data]
                    }
                })
            })
    }

    render () {
        return (
            <div>
                <h4 className="center">Add a Movie!</h4>

                <form className="center" action="/movies" method="post" onSubmit={this.handlePost}>
                    <input className="center" type="text" name="movieValue" placeholder="Name" value={this.state.movieValue} onChange={this.handleChange} />
                    <input className="center" type="text" name="yearValue" placeholder="Year" value={this.state.yearValue} onChange={this.handleChange} />
                    <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Movie" />
                </form>
            </div>
        )
    }
}

export default Post
