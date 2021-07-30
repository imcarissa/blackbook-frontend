import React from 'react'


const Contacts = (props) => {
    
    return (
        <div>
            CONTACTS:
            {props.contacts && props.contacts.map(contact =>
                <li key={contact.id}>
                {contact.name}<br/>
                email: {contact.email}<br/>
                phone #: {contact.phone_number}<br/>
                notes: {contact.notes}
                </li>
            )}
        </div>
    )
}

export default Contacts