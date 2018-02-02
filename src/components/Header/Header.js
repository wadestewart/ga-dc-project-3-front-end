import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchMovie from '../Forms/SearchMovie'

class Header extends Component {
  state = {}

  render () {
    return (
      <div>
      <header>
        <h1>{'Netflix & Chill'}</h1>
      </header>
      <SearchMovie
        {...this.props}
      />
      <Link to='/movies/results'>All Movies</Link>
    </div>
    )
  }
}

export default Header
