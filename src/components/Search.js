import React, { Component } from 'react'

class Search extends Component {
    render () {
        return (
            <div class="container">
            {/* <div class="row center-align"> */}
            <div class="row">
            <div class="col s6 offset-s3">
            {/* <div class="col s5 offset-s4"> */}
                {/* <form class="forms center-align" onSubmit={this.props.searchSubmit}> */}
                <form class="forms" onSubmit={this.props.searchSubmit}>
                    <div>
                    <input class="search-field"
                        type='text'
                        placeholder='Search for Movie'
                        value={this.props.query}
                        onChange={this.props.userSearch} />
                    </div>
                    <div>
                        {/* <button type='submit'>Search</button> */}
                        <button class="waves-effect waves-light btn-floating" type='submit'><i class="material-icons left red accent-4">search</i>Search</button>
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
