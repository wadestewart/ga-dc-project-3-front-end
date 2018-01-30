import React, { Component } from 'react'
import axios from 'axios'

class Movie extends Component {
    state = {
        currentMovie: {
            movieValue: '',
            yearValue: ''
          }
    }

    handleChange = (event) => {
        let newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState, _ => console.log(this.state))
    }

    handleUpdate = (event, id) => { //pass in id as parameter here
        // If you move this to a movie component, you can pass a prop
        console.log('A movie was edited: ' + this.state.movieValue)
        console.log('A year was edited: ' + this.state.yearValue)
        event.preventDefault()
        axios
        .put(
        `https://sheltered-dawn-94402.herokuapp.com/movies/${id}`, 
        {
            // new value for fields in the Db
        }
        ) 
        //2nd argument will be the object to replace the old thing in the db
    }

    render() {
        return (
            <div>
                 <h4 className="center">Edit a Movie!</h4>

                <form className="center" action='`/movies/${_id}`' method="put" onSubmit={this.handleUpdate}>
                {/* cross-reference comment below with comment above in axios .put */}
                {/* <form className="center" action='`/movies/${_id}`' method="put" onSubmit={(e) => this.handleUpdate(e, this.props.id)}> */}
                <input className="center" type="text" name="movieValue" placeholder="Name" value={this.state.movieValue} onChange={this.handleChange} />
                <input className="center" type="text" name="yearValue" placeholder="Year" value={this.state.yearValue} onChange={this.handleChange} />
                <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Movie" />
                </form>
            </div>
        )
    }
}
