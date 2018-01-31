import React, { Component } from 'react'
import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
import {queryMovie} from './components/Utility'

import './App.css'

class App extends Component {
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

  // componentDidMount () {
  //   queryMovie()
  //     .then(res => console.log(res))
  // }

  render() {
    return (
      <div className="App">
      <Header />
      <SearchContainer />
      </div>
    )
  }
}

export default App
