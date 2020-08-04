import React, { Component } from 'react'
import axios from 'axios'

export default class CreateContact extends Component {

    state = {
        label: '',
        telephone: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = async e => {
        await axios.post(
            'http://localhost:4000/contacts/admin',
            {
                label: this.state.label,
                telephone: this.state.telephone
            }
        )
        this.setState({
            label: '',
            telephone: ''
        })
        e.preventDefault()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card cardbody">
                        <h4>Create new contact</h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                        className="form-control"
                                        onChange={this.onInputChange}
                                        name="label"
                                        value={this.state.label}
                                        placeholder="Name"/>
                                <input type="text" 
                                        className="form-control"
                                        onChange={this.onInputChange}
                                        name="telephone"
                                        placeholder="Telephone"/>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
