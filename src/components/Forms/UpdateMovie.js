import React, { Component } from 'react'
import {
  updateMovie
} from '../../Utility'

class UpdateMovie extends Component {
    state = {
        movieId: this.props.movieId,
        nameInput: '',
        yearInput: '',
        providersInput: ''
      }

    handleInput = (e, inputType) => {
        let updateObj = {}
        updateObj[inputType] = e.target.value
        this.setState(prevState => (updateObj))
    }

    submitUpdate = (inputObj) => {
      inputObj.providersInput = inputObj.providersInput.split(',').map(provider => provider.trim())
      updateMovie(inputObj)
        .then(_ => {
          this.props.setMoviesState()
          this.props.history.push('/')
        })
    }

    componentDidMount () {
      this.setState(prevState => ({
        nameInput: this.props.movie.name,
        yearInput: this.props.movie.year,
      }))
    }

    render() {
        return (
          <div className="container">
            <h4 className="center">Edit a Movie!</h4>
            {this.state.nameInput &&
              <div>
              {/* I would recommend defining this submit-handler function as a method on the component, to separate your display logic from your 'business logic' */}
                <form className="center" onSubmit={(e) => {
                  e.preventDefault()
                  this.submitUpdate({
                    movieId: this.props.movieId,
                    nameInput: this.state.nameInput,
                    yearInput: this.state.yearInput,
                    providersInput: this.state.providersInput
                  })
                }}>
                    <input className="center" type="text" name="nameInput" placeholder="Name" value={this.state.nameInput} onChange={e => this.handleInput(e, 'nameInput')} />
                    <input className="center" type="text" name="yearInput" placeholder="Year" value={this.state.yearInput} onChange={e => this.handleInput(e, 'yearInput')} />
                    <input className="center" type="text" name="providersInput" placeholder="Provider" value={this.state.providersInput} onChange={e => this.handleInput(e, 'providersInput')} />
                    <input className="center btn waves-effect waves-light red color black" type="submit" value="Edit Movie" />
                </form>
              </div>
            }
          </div>
        )
    }
}

export default UpdateMovie
