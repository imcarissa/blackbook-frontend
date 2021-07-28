import React from 'react'
import { connect } from 'react-redux'

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
            
    }

    render() {
        return (
            <div>
                - the Contacts Input Form here -
                <form onSubmit={this.handleSubmit}>
                ****    <select name="category" value={this.state.name} onChange={this.handleChange}>
                        <option>category</option> 
                    </select> **** 
                    <br/>

                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name}/><br/>
                    <label>Phone Number:</label><input type="text"/><br/>
                    <label>Email:</label><input type="text"/><br/>
                    <label>Notes:</label><input type="text"/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null)(ContactsInput)