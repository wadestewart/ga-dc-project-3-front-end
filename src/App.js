import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="pink accent-2">
                <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Netflix Etc. & Chill</a>
                <ul className="right hide-on-med-and-down">
                <li>
                    <a href="/create ">Create</a>
                </li>
                </ul>
                </div>
            </nav>
        <main>
          <form action="/results" method='get'>
            <input type="text" placeholder='Search' className='input'/><button className='button'>Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App
