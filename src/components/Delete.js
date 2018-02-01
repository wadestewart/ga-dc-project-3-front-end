import React, { Component } from 'react'
import axios from 'axios'

class Delete extends Component {
    render() {
        return (
            <div className='deleteButton'>
                <button className=" center btn waves-effect waves-light red accent-4" value="Delete" onClick={(e) => this.props.deleteSubmit(e, {movieId: this.props.movieId})}>Delete</button>
            </div>
        )
    }
}

export default Delete

