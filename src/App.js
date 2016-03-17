import React, { Component } from 'react';
import GameInput from './components/GameInput';
import GameConsole from './components/GameConsole';
import GameLocation from './components/GameLocation';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Ashley + Hudson Vday2016 Adventure</h1>
        <GameLocation />
        <GameConsole />
        <GameInput />
      </div>
    );
  }
}
