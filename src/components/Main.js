import React, { Component } from 'react';

const Main = props => {
  return (
    <div>
      <h1>The Main Page</h1>
      <button onClick={() => props.changeUsername('Jorge')}>Change the UserName</button>
    </div>
  );
}

export default Main;
