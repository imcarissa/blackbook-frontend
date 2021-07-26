import React from 'react'


const Group = (props) => {

    let group = props.groups[props.match.params.id - 1]

    return (
        <li>
          {group ? group.name : null} -  {group ? group.description : null}
        </li>
    )
}

export default Group