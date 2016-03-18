function r( arr ) {
  return arr[ Math.floor( Math.random() * arr.length ) ];
}

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
    go: { woods: 100, south: 100, west: 300, garage: 210 },
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
    id: 210,
    title: "An Enchanting Garage",
    go: { east: 200, house: 200, west: 310, cave: 310 },
    look: {
      description: "The little red corvette actually doesn't hold up too well on closer inspection.  It's clean but clearly hasn't been used in years.  There's not much to report otherwise.",
      car: "Hasn't been touched in a while.  You try the doors but they're locked.",
      hudson: "Hudson is just kinda sittin' there.",
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
      description: "You've fallen down to the cave entrance, sliding all the way down the muddy hill behind you.  You probably can't go back the way you came.  There's a rusted out old Plymouth Valiant submerged in the mud.  Only its trunk is sticking out.",
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
  },
  {
    id: 320,
    title: "Inside the big room",
    go: { north: 330, forward: 330, back: 310, south: 310 },
    look: {
      description: "You're pretty deep in the cave now.  As you sweep your light around it, there's an occasional flutter of black wings.  There are stalactites everywhere and sparkling quartz crystals everywhere, and small glowing firefly lights flicker here and there.  Away from your flashlight they are they only lights you see, except for a very dull glow to the north.",
      hudson: "Hudson seems honestly a little freaked out, but more because of all the tiny creatures he could be murdering around here.",
      ground: "The ground is moist rock with ancient looking formations jutting out here and there.  There is a pretty clear path ahead of you toward the north."
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
  },
  {
    id: 330,
    title: "A Totally Normal Cafeteria",
    go: { elevator: 340, back: 310, south: 310 },
    look: {
      description: "You've suddenly entered what appears to be a normal 1950s style cafeteria.  There's snacks and coffee for sale, and a bored looking millenial is reading a book by the cash register.  She hasn't looked up.  There's an elevator off to the side.",
      book: `She's reading ${r(['Snowcrash', 'Microserfs', 'A Canticle for Liebowitz', 'a Raymond Chandler novel','a rhyming dictionary', 'The Book of Mormon'])}.`,
      hudson: "Hudson wants snacks, of course.",
      cafeteria: "What's a perfectly normal cafeteria doing deep beneath the earth?",
      snacks: "They've got both kinds: Regular and Cooler Ranch.",
      millenial: `She's cute, especially for someone that works in a cave.`,
      elevator: "Behind some revolving doors is a lobby with an elevator.  So weird."
    },
    take: {
      snack: function(s) { s.gameState.inventory.push('snack'); return s; },
      rope: function(s) { s.gameState.inventory.push('coffee'); return s; }
    },
  },
  {
    id: 340,
    title: "Inside the Elevator",
    go: { lobby: 400, cave: 330 },
    look: {
      description: "It's a totally normal elevator, except it's only got two buttons: 'Lobby' and 'Cave'.",
      elevator: "Seen one, you've seen 'em all.'"
    },
  },
  {
    id: 400,
    title: "A Lobby Fit For A...",
    go: { elevator: 340, kitchen: 410 },
    look: {
      description: "You're in what must be the mansion you saw earlier. You're surrounded by glass, a grand piano on the other side of the room is being tuned by someone who looks like they've been doing it a long while. You hear kitcheny sounds and what sounds like Car Talk coming from the kitchen.  Someone must be in there.",
      elevator: "You could get back in, but why go back down to the cave?",
      kitchen: "You can't see much from here, but the aroma of waffles is overpowering."
    },
    use: {
      piano: "I don't think the piano tuner would appreciate that.",
    },
  },
  {
    id: 410,
    title: "In Prince's Kitchen",
    go: { elevator: 340, kitchen: 410 },
    look: {
      description: "There he is.  It's Prince.  He's wearing an immaculate apron and operating two waffle makers at the same time, all the while looking as cool as heck somehow.  'Ashley,' Prince says to you. 'You look like you need a waffle.' He extends to you the most amazing waffle you've ever seen.  13 lawyers are on the other side of the room, chewing in near perfect unison.",
      prince: "He looks amazing, but he's probably already suing me for saying so.",
      lawyers: "Don't worry about them.",
      waffle: `It's the ${r(['Carl Sagan', 'Ann Druyan', 'Michael Stipe', 'Thom Yorke', 'Bjork', 'Joe Biden'])} of waffles. You need it.`,
      take: {
        waffle: function(s) { s.gameState.currentLocation = 500; return s; }
      }
    },
    use: {
      piano: "I don't think the piano tuner would appreciate that.",
    },
  },
  {
    id: 500,
    title: "Nirvana",
    go: { },
    look: {
      description: "The flavor of the waffle just takes you away. You float into a staggering purple beyond and soon there's nothing around you but warmth and safety. You've achieved the infinite. That really was some waffle."
    }
  },
];

export default GameData;
