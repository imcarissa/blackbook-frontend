import React from 'react'


const Group = (props) => {

    return (
        <li>
           {props.group.name} - {props.group.description}
        </li>
    )

}

export default Group