import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/addContact'

class ContactsInput extends React.Component {

    state = {
        name: '',
        email: '',
        phone_number: '',
        notes: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addContact(this.state, this.props.group.id) 
        this.setState({
            name: '',
            email: '',
            phone_number: '',
            notes: ''
        })
    }

    render() {
        return (
            <div>
                - the Contacts Input Form here -
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Phone Number:</label>
                    <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/><br/>
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <label>Notes:</label>
                    <input type="text"name="notes" value={this.state.notes} onChange={this.handleChange} /><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addContact})(ContactsInput)