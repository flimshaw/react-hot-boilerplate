import React, { Component } from 'react';
import GameData from '../stores/GameData';
import GameStore from '../stores/GameStore';

const ErrorMessages = [
  `Sorry, you can't do that.`,
  `I'm afraid you can't do that, Dave.`,
  `Try again, maybe something traditional, like 'go', or 'look'?`,
  `Sorry.`,
  `Come again?`
];

export default class GameInput extends Component {

  componentWillMount() {
    this.state = {
      gameData: GameStore.getCurrent()
    };
    GameStore.on('change', this.handleChange.bind(this) );
  }

  handleChange() {
    this.setState({
      gameData: GameStore.getCurrent()
    });
  }

  handleInput( e ) {
    e.preventDefault();
    var cmd = e.nativeEvent.target[0].value;
    e.target[0].value = '';

    var splitCmd = cmd.split(' ').map( (i) => { return i.toLowerCase() });

    var response;

    if( splitCmd[0] === 'look' && splitCmd.length === 1 ) {
      GameStore.createMessage({
        message: this.state.gameData.look.description
      });
      return;
    }

    // if the command is available on this item, look it up
    if( this.state.gameData[ splitCmd[0] ] !== undefined ) {

      var cmd = this.state.gameData[ splitCmd[0] ];

      var options = Object.keys( cmd ).map( (option) => {
        if( splitCmd.indexOf(option) !== -1 ) {
          return true;
        } else {
          return false;
        }
      });



      if( options.indexOf(true) !== -1 ) {
        var value = this.state.gameData[ splitCmd[0] ][ Object.keys( cmd )[ options.indexOf(true) ] ];
        switch( splitCmd[0] ) {
          case 'look':
            GameStore.createMessage({
              message: value
            });
            return;
            break;
          case 'go':
            GameStore.set( value );
            return;
            break;
        }

      }
    }

    GameStore.createMessage({
      message: ErrorMessages[ Math.floor( Math.random() * ErrorMessages.length ) ]
    });

  }

  render() {
    return (
      <form onSubmit={this.handleInput.bind(this)}>
        <input className='gameInput' type={'text'} placeholder={"Enter a command..."} />
      </form>
    );
  }
}
