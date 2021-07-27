import React from 'react'
import { Route, Link } from 'react-router-dom'
import Group from './Group'


const Groups = (props) => {
    return (
        <div>
            {props.groups.map(group => 
            <li key={group.id}>
                <Link to = {`/groups/${group.id}`}>{group.name}</Link>
            </li> )}
        </div>
    )
}

export default Groups