import React, { Component } from 'react'
import axios from 'axios'

export default class CreateContact extends Component {

    state = {
        contacts: [],
        label: '',
        telephone: ''
    }

    async componentDidMount() {
        this.getContacts()
    }

    getContacts = async () => {
        const res = await axios.get('http://localhost:4000/contacts/admin')
        this.setState({contacts: res.data})
    }

    onChangeContact = (e) => {
        this.setState({
            [e.target.name]:e.target.value
            // label: e.target.value,
            // telephone: e.target.value
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
        this.setState({label: ''})
        this.setState({telephone: ''})
        this.getContacts()
        e.preventDefault()
        // console.log(res)
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card cardbody">
                        <h3>Create new contact</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                        className="form-control"
                                        onChange={this.onChangeContact}
                                        name="label"
                                        value={this.state.label}
                                        placeholder="Name"/>
                                <input type="text" 
                                        className="form-control"
                                        onChange={this.onChangeContact}
                                        name="telephone"
                                        placeholder="Telephone"/>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="col-md-8">
                    <div className="list-group">
                        {
                            this.state.contacts.map(contact => (
                                <li className="list-group-item list-group-item-action" key={contact._id}>
                                    {contact.label}
                                </li>)
                            )
                        }
                    </div>
                </div> */}
            </div>
        )
    }
}
