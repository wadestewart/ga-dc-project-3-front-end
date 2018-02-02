import React, { Component } from 'react'
import {
  postMovie
} from '../../Utility'

class PostMovie extends Component {
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

    submitPost = (inputObj) => {
      inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
      postMovie(inputObj)
        .then(_ => {
          this.props.setMoviesState()
          this.props.history.push('/')
        })
    }

    render () {
        return (
        <div className="container">
          <h4 className="center">Add a Movie!</h4>
          <form
            className="center"
            onSubmit={(e) => {
              e.preventDefault()
              this.submitPost(this.state)
            }}>
              <input className="center" type="text" name="nameInput" placeholder="Name" onChange={e => this.handleInput(e, 'nameInput')} />
              <input className="center" type="text" name="yearInput" placeholder="Year" onChange={e => this.handleInput(e, 'yearInput')} />
              <input className="center" type="text" name="providersInput" placeholder="Provider" onChange={e => this.handleInput(e, 'providersInput')} />
              <input className=" center btn waves-effect waves-light red accent-4" type="submit" value="Add Movie" />
          </form>
        </div>
        )
    }
}

export default PostMovie
