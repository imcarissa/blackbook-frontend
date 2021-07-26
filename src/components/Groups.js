import React from 'react'
import Group from './Group'


const Groups = (props) => {
    return (
        <div>
            {props.groups.map(group => 
            <div key={group.id}><Group group={group}/></div>)}
        </div>
    )
}

export default Groups