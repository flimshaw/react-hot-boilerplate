import React, { Component } from 'react';
import GameStore from '../stores/GameStore';
import ConsoleItem from './ConsoleItem';

export default class GameConsole extends Component {

  componentWillMount() {
    this.state = {
      gameData: GameStore.getAll(),
    };
    GameStore.on('change', this.handleChange.bind(this) );
  }

  componentDidUpdate() {
    this._container.scrollTop = this._container.scrollHeight;
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

    var logs = this.state.gameData.messages.map( (message, i) => {
      return <ConsoleItem key={`i${i}`} copy={message.message} />;
    });

    return (
      <div className="gameConsole" ref={ (c) => this._container = c }>
        {logs}
      </div>
    );
  }
}
