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
      currentLocation: this.gameData[0].startLocation,
      inventory: []
    };
    this.messages = [
      { message: this.get( this.gameState.currentLocation ).look.description }
    ];
  }

  set( id ) {
    this.gameState.currentLocation = id;
    this.messages.push({
      message: this.getCurrent().look.description
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

  createMessage( message ) {
    var msg = message.message;
    console.log(msg, typeof('msg'));
    if( typeof(msg) === 'string' ) {
      this.messages.push( { message: msg } );
    } else
    if( typeof(msg) === 'object' ) {
      msg = msg.find( ( message ) => {
        if( message.test === null ) {
          return true;
        } else {
          return message.test(this.gameState);
        }
      });
      console.log(msg);
      this.messages.push( { message: msg.message } );
    }
    else {
      return false;
    }
    this.emit('change');
  }

  getCurrent() {
    return this.get( this.gameState.currentLocation );
  }

  getMessages() {
    return this.messages;
  }

  addInventory( o ) {
    this.getCurrent().take[ o.item ].taken = true;
    this.gameState.inventory.push( o.item );
    this.createMessage( { message: `You take the ${o.item}.` } );
  }

}

const gameStore = new GameStore();

window.store = gameStore;

export default gameStore;
