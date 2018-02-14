import React, { Component } from 'react'

class FormCheckbox extends Component {
  state = {
    isChecked: undefined // null is a better initial value since it won't be a default value in JavaScript. This is mainly important because mistyped/valueless properties will be undefined with an object.
  }

  handleCheck = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }))
  }

  componentDidMount () {
    console.log(this.props)
    this.setState(prevState => ({
      isChecked: this.props.isChecked
    }))
  }

  render () {
      return (
        <div onClick={this.handleCheck}>
          <input type='checkbox' name='provider' value={this.props.value} checked={this.state.isChecked} />
          <label>{this.props.value}</label>
        </div>
      )
  }
}

export default FormCheckbox
