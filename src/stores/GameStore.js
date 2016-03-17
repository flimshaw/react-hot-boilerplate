import EventEmitter from 'events'
import GameData from './GameData'

class GameStore extends EventEmitter {

  constructor() {
    super();
    this.gameData = GameData;
    this.gameLookup = this.gameData.map( (item) => {
      return item.id;
    });
    this.gameState = {
      currentLocation: 100,
      inventory: []
    };
    this.messages = [
      { message: this.gameData[0].look.description }
    ];
  }

  set( id ) {
    this.gameState.currentLocation = id;
    this.messages.push({
      message: this.gameData[ this.gameLookup.indexOf(id) ].look.description
    });
    this.emit('change');
  }

  get( id ) {
    return this.gameData[this.gameLookup.indexOf( id )];
  }

  getAll() {
    return {
      gameData: this.gameData,
      gameState: this.gameState,
      messages: this.messages
    };
  }

  createMessage( o ) {
    this.messages.push({
      message: o.message
    });
    this.emit('change');
  }

  getCurrent() {
    return this.get( this.gameState.currentLocation );
  }

  getMessages() {
    return this.messages;
  }

}

const gameStore = new GameStore();

window.store = gameStore;

export default gameStore;
