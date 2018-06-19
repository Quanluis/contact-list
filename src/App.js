import React, { Component } from 'react';
import Input from './Input'
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <h1 className = "main-header" >Contact Creator</h1>
      <Input />
     </div>
    );
  }
}

export default App;
