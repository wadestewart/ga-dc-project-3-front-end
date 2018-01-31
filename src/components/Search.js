import React, { Component } from 'react'

class Search extends Component {
    render () {
        return (
            <div>
                <form onSubmit={this.props.searchSubmit}>
                    <input
                        type='text'
                        placeholder='Search for Movie'
                        value={this.props.query}
                        onChange={this.props.userSearch}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
