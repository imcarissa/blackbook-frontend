export default function groupReducer(state = {groups: []}, action) {
    
    switch (action.type) {
        
        case 'FETCH_GROUPS':
            return {groups: action.payload}
        
        case 'ADD_GROUP':
            return {...state, groups: [...state.groups, action.payload]}
        
        case 'ADD_CONTACT':
            let groups = state.groups.map(group => {
                if (group.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return group
                }
            })
            return {...state, groups: groups}

        case 'EDIT_GROUP': 
        let editGroups = state.groups.map(group => {
            if (group.id === action.payload.id) {
                return action.payload
            }
            else {
                return group
            }
        })
            return {...state, groups: editGroups}
        
        case 'DELETE_CONTACT':
            let deleteGroups = state.groups.map(group => {
                if (group.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return group
                }
            })
            return {...state, groups: deleteGroups}
       
        default:
            return state
    }
}