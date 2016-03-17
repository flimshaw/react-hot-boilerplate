import React, { Component } from 'react';
import GameData from '../stores/GameData';
import GameStore from '../stores/GameStore';
import hudsname from '../lib/HudsonNameGenerator';

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

  componentDidMount() {
    this._input.focus();
  }

  handleChange() {
    this.setState({
      gameData: GameStore.getCurrent()
    });
  }

  throwError() {
    GameStore.createMessage({
      message: ErrorMessages[ Math.floor( Math.random() * ErrorMessages.length ) ]
    });
  }

  // *See "Command Structure" in the readme for more info
  handleInput( e ) {

    e.preventDefault();

    var input = e.nativeEvent.target[0].value;
    e.target[0].value = '';

    // for starters, print the input we entered
    GameStore.createMessage({
      message: `>> ${input}`
    });

    // break the sentence into lower case words
    var inputArray = input.trim().split(' ').map( (i) => { return i.toLowerCase(); });

    // first, check for some universal commands, like 'help'
    switch( inputArray[0] ) {
      case 'help':
        GameStore.createMessage({
          message: GameStore.get(0).helpMessage
        });
        return;
      case 'pet':
        if( inputArray.indexOf('hudson') > -1 ) {
          GameStore.createMessage({
            message: hudsname() + "!"
          });
        } else {
          GameStore.createMessage({
            message: "You don't want to pet that..."
          });
        }
        return;
    }

    // list of options for this command
    var cmdOptions = this.state.gameData[ inputArray[0] ];
    if( cmdOptions === undefined ) {
      this.throwError();
      return;
    }

    // find the first instance of a command valid for this verb in this location
    var option = Object.keys( cmdOptions ).find( (option) => {
      return inputArray.indexOf(option) !== -1;
    });

    var value = false;
    if( option !== undefined ) {
      value = this.state.gameData[ inputArray[0] ][ option ];
    }

    // fork based on the first command
    switch( inputArray[0] ) {
      case 'look':
        // if we just said look, return a description of where we are
        if( option === undefined ) {
          GameStore.createMessage({
            message: this.state.gameData.look.description
          });
        // otherwise return the value stored at this location
        } else {
          GameStore.createMessage({
            message: value
          });
        }
        break;
      case 'go':
        if( value ) {
          GameStore.set( value );
        } else {
          this.throwError();
        }
        break;
      case 'use':
        GameStore.createMessage({
          message: value
        });
        break;
      case 'take':
        GameStore.addInventory({
          item: false
        })
        break;
      default:
        this.throwError();
    }

  }

  render() {
    return (
      <form onSubmit={this.handleInput.bind(this)}>
        <input className='gameInput' type={'text'} placeholder={">>"} ref={ (c) => { this._input = c; } }/>
      </form>
    );
  }
}
