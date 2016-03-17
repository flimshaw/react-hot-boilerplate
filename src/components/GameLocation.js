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
    return GameStore.getCurrent().title;
  }

  render() {

    if( this.state.gameData.messages === undefined ) return false;

    return (
      <h1 className="gameLocation">{this.getCurrentLocation()}</h1>
    );
  }
}
