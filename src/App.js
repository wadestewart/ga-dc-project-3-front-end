import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href="/">Netflix Etc. & Chill</a></li>
          <li><a href="/create">Create</a></li>
        </ul>
        <main>
          <form action="/results" method='get'>
            <input type="text" placeholder='Search' className='input'/><button className='button'>Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
