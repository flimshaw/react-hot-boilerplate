import React, { Component } from 'react';
import GameData from '../stores/GameStore';

export default class ConsoleItem extends Component {
  render() {
    return (
      <div className="consoleItem">
        {this.props.copy}
      </div>
    );
  }
}
