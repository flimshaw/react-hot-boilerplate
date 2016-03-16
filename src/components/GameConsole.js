import React, { Component } from 'react';
import GameStore from '../stores/GameStore';
import ConsoleItem from './ConsoleItem';

export default class GameConsole extends Component {

  componentWillMount() {
    this.state = {
      messages: GameStore.getMessages()
    };
    GameStore.on('change', this.handleChange.bind(this) );
  }

  componentDidUpdate() {
    this._container.scrollTop = this._container.scrollHeight;
  }

  handleChange() {
    this.setState({
      messages: GameStore.getMessages()
    });
  }

  render() {

    if( this.state.messages === undefined ) return false;

    var logs = this.state.messages.map( (message, i) => {
      return <ConsoleItem key={`i${i}`} copy={message.message} />
    })

    return (
      <div className="gameConsole" ref={ (c) => this._container = c }>
        {logs}
      </div>
    );
  }
}
