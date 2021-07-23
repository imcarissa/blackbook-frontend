import React from 'react'
import { connect } from 'react-redux';
import Groups from './components/Groups'
import GroupInputForm from './components/GroupsInputForm'



class GroupsContainer extends React.Component {

    componentDidMount() {

    }

    
    render () {
        return (
            <div >
                <GroupInputForm/>
                <Groups/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps)(GroupsContainer)