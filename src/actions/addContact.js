export const addContact = (contact, groupId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/accounts/${groupId}/contacts`, {
            headers: {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(contact)
            }
        })
        .then(response => response.json())
        .then(group => dispatch({type: 'ADD_CONTACT', payload: group}))
    }
}