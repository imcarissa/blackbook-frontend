export const addGroup = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/accounts', {
            headers: {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
        })
        .then(response => response.json())
        .then(group => dispatch({type: 'ADD_GROUP', payload: group}))
    }

}