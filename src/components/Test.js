import React, { Component } from 'react'

class Test extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <p>test</p>
      </div>
    )
  }
}

export default Test
