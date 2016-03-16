import React, { Component } from 'react';
import GameInput from './components/GameInput';
import GameConsole from './components/GameConsole';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>oh boy</h1>
        <GameConsole />
        <GameInput />
      </div>
    );
  }
}
