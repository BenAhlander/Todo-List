import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo-list</h2>
        </div>
        <div className="App-intro">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
