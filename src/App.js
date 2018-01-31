import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
import {queryMovie} from './components/Utility'
import Post from './components/Post'

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
      <Router>
      <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path='/create' render={() => (<Post />)} />
        </Switch>
      </main>
      <SearchContainer />

      </div>
    </Router>
    )
  }
}

export default App


// return (
//       <div className="App">
//             <Header />
//             <main>
//                 <Switch>
//                     <Route path="/recipes" render={() => (<RecipeContainer />)} />
//                     <Route path="/" render={() => (<Home />) } />
//                 </Switch>
//             </main>
//             <Footer />
//         </div>
