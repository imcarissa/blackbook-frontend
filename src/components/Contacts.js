import React from 'react'


const Contacts = (props) => {
    
    return (
        <div>
            - diplay each contact -
            {props.contacts && props.contacts.map(contact =>
                <li key={contact.id}>
                {contact.name}<br/>
                - {contact.email} - {contact.phone_number}<br/>
                - {contact.notes}
                </li>
            )}
        </div>
    )
}

export default Contacts