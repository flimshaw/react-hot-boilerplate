const GameData = [
  {
    id: 0,
    title: "Not Really a Place",
    helpMessage: "Try using commands like 'look', 'go', 'take', 'use' or 'pet'.",
    startLocation: 100,
    look: {
      description: "You really shouldn't be here."
    }
  },
  {
    id: 100,
    title: "The Scary Woods",
    go: { north: 200 },
    look: {
      description: "You're in some pretty scary woods all right.  Hudson is with you and is frantically sniffing the ground for traces of squirrel.  There is a small house to the north.",
      hudson: "Oh little Hudso... So smart, and yet so dumb at the same time.",
      woods: "They are very scary indeed.  I think it's the soundtrack that's doing it. As you look around, you realize the sound of the wind seems to be skipping a bit. And why is there a wire coming out of that tree stump...",
      stump: "Upon closer inspection, there's a turntable spinning idly next to the treestump. It's half-way through Scary Halloween Sounds vol. 3.  There's an elaborate solar panel arrangement that must keep it going day and night.",
      ground: "Just ordinary ground.",
      squirrel: "Hudson is a sucker for squirrels.  You don't really see the appeal.",
      house: "You can just see the top of the house above the trees. It's pointy and standard-ish.",
      west: "Not much to see over there.",
      east: "Sky to the east is getting dark. It must be late afternoon.",
      south: "Nothing but thorny, Tolkein-esque brambles and darkness."
    },
    take: {
      record: {
        message: "You take the record.",
        item: "record"
      }
    }
  },
  {
    id: 200,
    title: "In Front of Da Housss",
    go: { woods: 100, south: 100, west: 300, garage: 400 },
    look: {
      description: "You're in front of da housss.  It's pretty normal looking, except for the fact that it's enormous and purple and has a few well-kept basketball courts .  There is a little red corvette parked in the open garage.  You think you smell waffles. There is a tall gate surrounding the property.",
      gate: "The gate has a strange symbol at the top. It looks impenetrable.",
      hudson: "Hudson's being Hudson, and pulling his leash to the west.  Maybe he smells something...",
      woods: "You know, they really weren't all that scary actually. You could go back there. It'd be nbd.",
      house: "The place is a palace, decidedly regal.",
      waffles: "There's a cartoon-like smoke trail coming from a plate on the upstairs window sill.  That must be where the waffles are cooling.",
      basketball: "These courts are immaculate, but not disused.  Whoever lives here is pretty serious about basketball.",
      symbol: "It's some kinda fancy letter 'P'."
    },
    use: {
      gate: {
        requires: function( state ) { return state.gameState.inventory.indexOf('gate_key') !== -1 },
        fail: "You can't do that, it's *very* locked."
      }
    }
  },
  {
    id: 300,
    title: "In front of the cave",
    go: { east: 200, house: 200, west: 310, cave: 310 },
    look: {
      description: "Hudson sniffed out a cave! It's pretty small, but who knows how deep it goes. It's too dark to see much. There is a musky breeze coming from the cave.",
      hudson: "If you didn't know better, you'd say he was proud of his find.  Also he's licking himself with a subtle kind of dignity.",
      house: "The house is back to the east, you can't quite see it.",
      cave: "The mouth of the cave is about 20 feet down a steepish hill, and you can only see about 10 feet inside it before it's just black.  The ground leading up to it is pretty muddy...",
      mud: "It's brown and mud-like.",
    }
  },
  {
    id: 310,
    title: "In the cave entrance",
    go: { in: 320, west: 320, cave: 320 },
    look: {
      description: "You've fallen down to the cave entrance.",
      hudson: "Hudson sneezes and shakes off some mud.",
      cave: [
        {
          test: function(state) { return state.inventory.indexOf('flashlight') !== -1; },
          message: "The cave just goes and goes."
        },
        {
          test: null,
          message: "Now that you're inside, you clap and hear the reverberations of the cave.  It must go on for miles.  If only you had a flashlight.",
        }
      ],
      hill: "There's a clear track in the hill behind you where you slid down.  It's probably to slippery to go back up without some help.",
      valiant: "It's definitely early '60s based on its vestigial fins. The trunk is the only part that's sticking out.",
      trunk: "With the gentlest suggestion the trunk pops open.  There is a flashlight and some rope in the trunk.  How convenient.",
    },
    take: {
      flashlight: {
        message: "You take the flashlight.",
        item: 'flashlight'
      },
      rope: {
        message: "You take the rope.",
        item: 'rope'
      }
    },
    // _r_ = requires this item to see, overrides defaults if item is present
    _r_flashlight: {
      look: {
        description: "The flashlight doesn't help much from here, you'll have to get closer.  But you can at least see the ground in front of you.",
        cave: "You need to go inside it to use the flashlight.",
        trunk: "You shine the flashlight in the trunk and see some cards wedged in the corner.",
        cards: "Cards?  Ohhhh, yeah, they're just playing cards.",
        hudson: "He's not impressed by your flashlight."
      },
      take: {
        cards: {
          message: "You take the cards.",
          item: 'playing cards'
        }
      }
    }
  },
  {
    id: 400,
    title: "An Enchanting Garage",
    go: { east: 200, house: 200, west: 310, cave: 310 },
    look: {
      description: "The little red corvette actually doesn't hold up too well on closer inspection.  It's clean but clearly hasn't been used in years.  There's a ",
      hudson: "Hudson is just kinda sittin' there.",
    }
  },
];

export default GameData;
