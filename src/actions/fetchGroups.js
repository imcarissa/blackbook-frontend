export function fetchGroups() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/groups')
        .then(response => response.json())
        .then(groups => dispatch({
            type: 'FETCH_GROUPS',
            payload: groups
        }))   
    }
}