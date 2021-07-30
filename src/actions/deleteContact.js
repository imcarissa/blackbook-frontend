export const deleteContact = (contactId, groupId) => {

    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/accounts${groupId}/contacts/${contactId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(group => dispatch({type: 'DELETE_CONTACT', payload: group}))
    }
}