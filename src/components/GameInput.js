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

    var command = e.nativeEvent.target[0].value;
    e.target[0].value = '';

    // for starters, print the command we entered
    GameStore.createMessage({
      message: `>> ${command}`
    });

    // break the sentence into lower case words
    var commandArray = command.trim().split(' ').map( (i) => { return i.toLowerCase(); });

    // handle a few exceptions, like just 'look'
    if( commandArray[0] === 'look' && commandArray.length === 1 ) {
      GameStore.createMessage({
        message: this.state.gameData.look.description
      });
      return;
    }

    // if the command is available on this item, look it up
    if( this.state.gameData[ commandArray[0] ] !== undefined ) {

      var cmd = this.state.gameData[ commandArray[0] ];

      var options = Object.keys( cmd ).map( (option) => {
        if( commandArray.indexOf(option) !== -1 ) {
          return true;
        } else {
          return false;
        }
      });

      if( options.indexOf(true) !== -1 ) {
        var value = this.state.gameData[ commandArray[0] ][ Object.keys( cmd )[ options.indexOf(true) ] ];
        switch( commandArray[0] ) {
          case 'look':
            GameStore.createMessage({
              message: value
            });
            break;
          case 'go':
            GameStore.set( value );
            break;
          case 'use':
            GameStore.createMessage({
              message: value
            });
            break;
        }

      }
    }

    // if nothing else, throw a random error message
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
