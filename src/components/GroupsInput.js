import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions/addGroup'


class GroupsInput extends React.Component {

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
        this.setState({
            name: '',
            category: '',
            description: ''
        })
        this.props.addGroup(this.state)
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

export default connect(null, {addGroup})(GroupsInput)