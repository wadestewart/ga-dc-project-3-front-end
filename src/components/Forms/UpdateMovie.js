import React, { Component } from 'react'

class Update extends Component {
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
      console.log(this.props)
      this.setState(prevState => ({
        name: this.props.movie.name,
        year: this.props.movie.year
      }))
    }

    render() {
        return (
          <div className="container">
            <h4 className="center">Edit a Movie!</h4>
            <form className="center" onSubmit={(e) => {
              this.props.submitUpdate(e, {
                movieId: this.props.movieId,
                nameInput: this.state.nameInput,
                yearInput: this.state.yearInput,
                providersInput: this.state.providersInput
              })
              this.props.history.push('/')
            }}>
                <input className="center" type="text" name="name" placeholder="Name" onChange={e => this.handleInput(e, 'nameInput')} />
                <input className="center" type="text" name="year" placeholder="Year" onChange={e => this.handleInput(e, 'yearInput')} />
                <input className="center" type="text" name="providers" placeholder="Provider" onChange={e => this.handleInput(e, 'providersInput')} />
                <input className=" center btn waves-effect waves-light red accent-4" type="submit" value="Edit Movie" />
            </form>
          </div>
        )
    }
}

export default Update
