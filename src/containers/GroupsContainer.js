import React from 'react'
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/fetchGroups'
import Groups from '../components/Groups'
import GroupInputForm from '../components/GroupsInput'



class GroupsContainer extends React.Component {

    componentDidMount() {
        this.state.fetchGroups()
    }


    render () {
        return (
            <div >
                <GroupInputForm/>
                <Groups groups={this.props.groups}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps, {fetchGroups})(GroupsContainer)