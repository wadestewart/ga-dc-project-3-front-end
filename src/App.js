import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
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

  render() {
    let movies = this.state.movies.map((movie, index) => {
      return <div key={index} className='center'>
              <h4 className="movie-name">{movie.name}</h4>
              <p className="movie-year">{movie.year}</p>
              <p className="movie-provider">{movie.provider}</p>
          </div>
    })

    return (
      <div className="App">

        <nav className="pink accent-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Netflix, Etc. & Chill</a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/create ">Create</a>
                </li>
              </ul>
          </div>
        </nav>

        <main>
          <form action="/results" method="get">
            <input type="text" placeholder="Search" className="input" />
            <button className="button">Submit</button>
          </form>

            {movies}

          <h4 className="center">Add a Movie!</h4>

          <form className="center" action="/movies" method="post" onSubmit={this.handlePost}>
            <input className="center" type="text" name="movieValue" placeholder="Name" value={this.state.movieValue} onChange={this.handleChange} />
            <input className="center" type="text" name="yearValue" placeholder="Year" value={this.state.yearValue} onChange={this.handleChange} />
            <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Movie" />
          </form>
        </main>
      </div>
    )
  }
}

export default App
