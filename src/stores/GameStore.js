import EventEmitter from 'events'
import GameData from './GameData'

class GameStore extends EventEmitter {

  constructor() {
    super();
    this.gameData = GameData;
    this.gameState = {
      currentLocation: this.gameData['l100'],
      inventory: []
    };
    this.messages = [
      { message: this.gameState.currentLocation.look.description }
    ];
  }

  set( id ) {
    if( typeof(id) === 'number' ) {
      id = `l${id}`;
    }
    this.gameState.currentLocation = this.gameData[id];

    switch( typeof(this.gameState.currentLocation.look.description) ) {
      case 'string':
        this.messages.push({
          message: this.gameState.currentLocation.look.description
        });
        break;
      case 'function':
        this.messages.push({
          message: this.gameState.currentLocation.look.description(this.gameState)
        });
        break;
    }

    this.emit('change');
  }

  get( id ) {
    if( typeof(id) === 'number' ) {
      id = `l${id}`;
    }
    return this.gameData[id];
  }

  getAll() {
    return {
      gameData: this.gameData,
      gameState: this.gameState,
      messages: this.messages
    };
  }

  createMessage( gameData ) {
    if( typeof(gameData) === 'string' ) {
      this.messages.push( { message: gameData } );
    } else
    if( typeof(gameData) === 'function' ) {
      this.messages.push( { message: gameData(this.gameState) } );
    } else
    if( typeof(gameData) === 'object') {
      this.messages.push( gameData );
    }
    else {
      return false;
    }
    this.emit('change');
  }

  getCurrent() {
    return this.gameState.currentLocation;
  }

  getMessages() {
    return this.messages;
  }

}

const gameStore = new GameStore();

window.store = gameStore;

export default gameStore;
