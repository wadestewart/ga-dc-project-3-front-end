import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div className='container'>
        {/* <div class="row center-align"> */}
        <div className='row'>
          <div className='col s6 offset-s3'>
            {/* <div class="col s5 offset-s4"> */}
            {/* <form class="forms center-align" onSubmit={this.props.searchSubmit}> */}
            <form className='forms' onSubmit={this.props.searchSubmit}>
              <div>
                <input className='input-field'
                  type='text'
                  placeholder='Search for Movie'
                  value={this.props.searchInput}
                  onChange={this.props.handleSearchInput} />
              </div>
              <div>
                {/* <button type='submit'>Search</button> */}
                <button className='waves-effect waves-light btn-floating grey' type='submit'><i className='material-icons left grey'>search</i>Search</button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default Search
