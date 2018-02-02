import React, { Component } from 'react'

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
                <form className="center" onSubmit={(e) => {
                  this.props.submitUpdate(e, {
                    movieId: this.props.movieId,
                    nameInput: this.state.nameInput,
                    yearInput: this.state.yearInput,
                    providersInput: this.state.providersInput
                  })
                  this.props.history.push('/')
                }}>
                    <input className="center" type="text" name="name" placeholder="Name" value={this.state.nameInput} onChange={e => this.handleInput(e, 'nameInput')} />
                    <input className="center" type="text" name="year" placeholder="Year" value={this.state.yearInput} onChange={e => this.handleInput(e, 'yearInput')} />
                    <input className="center" type="text" name="providers" placeholder="Provider" value={this.state.providersInput} onChange={e => this.handleInput(e, 'providersInput')} />
                    <input className="center btn waves-effect waves-light" type="submit" value="Edit Movie" />
                </form>
              </div>
            }
            
          </div>
        )
    }
}

export default UpdateMovie
