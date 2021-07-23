import React from 'react';
import { connect } from 'react-redux';
import GroupsContainer from './containers/GroupsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GroupsContainer/>
      </div>
    );
  }
}

export default (App);
