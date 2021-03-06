import React from 'react'
import ContactsInput from '../components/ContactsInput'
import Contacts from '../components/Contacts'


class ContactsContainer extends React.Component {



    render() {
        return (
            <div>
                <ContactsInput group ={this.props.group}/><br/><br/>
                <Contacts contacts={this.props.group && this.props.group.contacts}/>
            </div>
        )
    }
}

export default ContactsContainer