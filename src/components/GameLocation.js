import React, { Component } from 'react';
import GameStore from '../stores/GameStore';
import ConsoleItem from './ConsoleItem';

export default class GameLocation extends Component {

  componentWillMount() {
    this.state = {
      gameData: GameStore.getAll(),
    };
    GameStore.on('change', this.handleChange.bind(this) );
  }

  handleChange() {
    this.setState({
      gameData: GameStore.getAll(),
    });
  }

  getCurrentLocation() {
    return this.state.gameData.gameData[ GameStore.gameLookup.indexOf( this.state.gameData.gameState.currentLocation ) ].title;
  }

  render() {

    if( this.state.gameData.messages === undefined ) return false;

    return (
      <h2 className="gameLocation">{this.getCurrentLocation()}</h2>
    );
  }
}
