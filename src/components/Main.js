import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>The Main Page</h1>
        <button onClick={() => this.props.changeUsername('Jorge')}>Change the UserName</button>
      </div>
    );
  }
}

export default Main;