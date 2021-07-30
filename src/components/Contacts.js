import React from 'react'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/deleteContact'

const Contacts = (props) => {

    const handleDelete = (contact) => {
        props.deleteContact(contact.id, contact.group_id)
    }
    
    return (
        <div>
            CONTACTS:
            {props.contacts && props.contacts.map(contact =>
                <li key={contact.id}>
                {contact.name}<br/>
                email: {contact.email}<br/>
                phone #: {contact.phone_number}<br/>
                notes: {contact.notes}<br/>
                <button onClick={() => handleDelete(contact)}>Delete</button>
                </li>
            )}
        </div>
    )
}

export default connect(null, {deleteContact})(Contacts)