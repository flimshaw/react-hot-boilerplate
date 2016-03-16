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
      currentItem: 100
    }
    this.messages = [
      { message: this.gameData[0].look.description }
    ];
  }

  set( id ) {
    this.gameState.currentItem = id;
    this.messages.push({
      message: this.gameData[ this.gameLookup.indexOf(id) ].look.description
    });
    this.emit('change');
  }

  get( id ) {
    return this.gameData[this.gameLookup.indexOf( id )];
  }

  createMessage( o ) {
    this.messages.push({
      message: o.message
    });
    this.emit('change');
  }

  getCurrent() {
    return this.get( this.gameState.currentItem );
  }

  getMessages() {
    return this.messages;
  }

}

const gameStore = new GameStore;



export default gameStore;
