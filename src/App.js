import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Main from './components/Main';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Main changeUsername={(name) => this.props.setName(name) } />
          <User username={this.props.user.name} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {dispatch({type: 'SET_NAME', payload: name})}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
