import React from 'react'
import { connect } from 'react-redux'
import { editGroup } from '../actions/editGroup'


class GroupEdit extends React.Component {

    state = {
        name: '',
        category: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let group = {...this.state, id: this.props.group.id}
        this.props.editGroup(group)
        this.setState({
            name: '',
            category: '',
            description: ''
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Create A Group: </label>
                    <input type='text' placeholder='name of group' value={this.state.name} name='name' onChange={this.handleChange}/>
                    <br/>
                    <label>Category: </label>
                    <input type='text' placeholder='category' value={this.state.category} name='category' onChange={this.handleChange} />
                    <br/>
                    <label>Description: </label>
                    <input type='text' placeholder='description' value={this.state.description} name='description' onChange={this.handleChange} />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {editGroup})(GroupEdit)