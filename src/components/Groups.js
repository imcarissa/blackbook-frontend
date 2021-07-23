import React from 'react'


const Groups = (props) => {
    return (
        <div>
            {props.groups.map(group => <li key={group.id}>{group.name} - {group.description}</li> )}
        </div>
    )
}

export default Groups