import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
        movies: []
    }
componentDidMount () {
	axios.get('https://sheltered-dawn-94402.herokuapp.com/movies')
    .then(response => {this.setState({ movies: response.data })
    console.log(response)})
}
  render() {
    let movies = this.state.movies.map((movie, index) => {
      console.log(this.state.movies)
        return <div className='center'>
                {/* <li key={index} className="movie-name">
                    <a href={'/movie/' + movie.name}>{movie.name}</a>
                </li> */}
                <h4 className="movie-name">{movie.name}</h4>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-provider">{movie.provider}</p>
            </div>
    })
    return <div className="App">
            <nav className="pink accent-2">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">
                        Netflix, Etc. & Chill
                    </a>
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
                <h4 className="center">Add a movie!</h4>

                <form className="center" action="/movies" method="post">
                    <input className="center" type="text" name="movie[name]" placeholder="Name" />
                    <input className="center" type="text" name="movie[year]" placeholder="Year" />
                    <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Movie" />
                </form>
            </main>
        </div>
  }
}

export default App
