import React from 'react'
import { Redirect } from 'react-router-dom'
import GroupEdit from './GroupEdit'
import ContactsContainer from '../containers/ContactsContainer'


const Group = (props) => {

    let group = props.groups.filter(group => group.id == props.match.params.id)[0]

    return (
      <div>
        <h2>
          {group ? group.name : null} -  {group ? group.description : null}
        </h2>
        <ContactsContainer group={group}/>
        <GroupEdit group={group}/>
      </div>
    )
}

export default Group