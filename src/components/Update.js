import React, { Component } from 'react'
import axios from 'axios'

class Update extends Component {
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

    render() {
        return (<div>
                <h4 className="center">Edit a Movie!</h4>
                <form className="center" action="`/movies/${_id}`" method="put" onSubmit={(e) => this.props.updateSubmit(e, this.state)}>
                    {/* cross-reference comment below with comment above in axios .put */}
                    {/* <form className="center" action='`/movies/${_id}`' method="put" onSubmit={(e) => this.handleUpdate(e, this.props.id)}> */}
                    <input className="center" type="text" name="name" placeholder="Name"  onChange={e => this.handleInput(e, 'nameInput')} />
                    <input className="center" type="text" name="year" placeholder="Year" onChange={e => this.handleInput(e, 'yearInput')} />
                    <input className="center" type="text" name="providers" placeholder="Provider" onChange={e => this.handleInput(e, 'providersInput')} />
                    <input className=" center btn waves-effect waves-light pink accent-2" type="submit" value="Edit Movie" />
                </form>
            </div>)
    }
}

export default Update
