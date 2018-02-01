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
        return <div class="container">
        
                    <h4 class="center">Add a Movie!</h4>
                    <div class="row">
                    <div class="col s6 offset-s3">
                    <form class="center" action="/movies" method="post" onSubmit={(e) => this.props.postSubmit(e, this.state)}>
                        <input class="center" id="name-input" type="text" name="nameInput" placeholder="Name" onChange={e => this.handleInput(e, 'nameInput')} />
                        <input class="center" id="year-input" type="text" name="yearInput" placeholder="Year" onChange={e => this.handleInput(e, 'yearInput')} />
                        <input class="center" id="provider-input" type="text" name="providersInput" placeholder="Provider" onChange={e => this.handleInput(e, 'providersInput')} />
                        <input class="center btn waves-effect waves-light red accent-4" type="submit" value="Add Movie" />
                    </form>
                    </div>
                    </div>
                </div>
    }
}

export default Post
