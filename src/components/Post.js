import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
       nameInput: '',
       yearInput: '',
       providersInput: ''
    }

    handleInput = (e, inputType) => {
        let updateObj = {}
        updateObj[inputType] = e.target.value
        this.setState(prevState => (updateObj), _ => console.log(this.state))
    }

    render () {
        return <div>
                <h4 className="center">Add a Movie!</h4>

                <form className="center" action="/movies" method="post" onSubmit={(e) => this.props.postSubmit(e, this.state)}>
                    <input className="center" type="text" name="nameInput" placeholder="Name" onChange={e => this.handleInput(e, 'nameInput')} />
                    <input className="center" type="text" name="yearInput" placeholder="Year" onChange={e => this.handleInput(e, 'yearInput')} />
                    <input className="center" type="text" name="providersInput" placeholder="Provider" onChange={e => this.handleInput(e, 'providersInput')} />
                    <input className=" center btn waves-effect waves-light pink accent-2 " type="submit" value="Add Movie" />
                </form>
            </div>
    }
}

export default Post
