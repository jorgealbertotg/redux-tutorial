import React, { Component } from 'react';

const User = props => {
  return (
    <div>
      <h1>The User Page</h1>
      <p><strong>User Name: </strong>{props.username}</p>
    </div>
  );
}

export default User;
