import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchGroups } from '../actions/fetchGroups'
import Group from '../components/Group'
import Groups from '../components/Groups'
import GroupInput from '../components/GroupInput'

class GroupsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGroups()
    }

    render() {
        return (
            <div>
              <Switch>
                <Route path='/groups/new' component = {GroupInput} />
                <Route path='/groups/:id' render = {(routerProps) => <Group {...routerProps} groups = {this.props.groups}/>} />
                <Route exact path='/groups' render = {(routerProps) => <Groups {...routerProps} groups = {this.props.groups}/>} />
              </Switch>
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