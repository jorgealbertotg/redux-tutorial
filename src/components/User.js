import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <h1>The User Page</h1>
        <p><strong>User Name: </strong>{this.props.username}</p>
      </div>
    );
  }
}

export default User;