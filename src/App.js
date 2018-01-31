import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchContainer from './components/SearchContainer'
// import {queryMovie} from './components/Utility'
import Post from './components/Post'
import Update from './components/Update'

import './App.css'

class App extends Component {
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
