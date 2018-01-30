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

        </main>
      </div>
    )
  }
}

export default App
