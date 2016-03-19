function r( arr ) {
  return arr[ Math.floor( Math.random() * arr.length ) ];
}

function take( item ) {
  return (s) => {
    if( s.inventory.indexOf(item) == -1 ) {
      s.inventory.push(item);
      return `You've taken the ${item}.`;
    } else {
      return `You already have it.`;
    }
  }
}



const GameData = {
  'l0': {
    title: "Not Really a Place",
    helpMessage: "Try using commands like 'look', 'go', 'take', 'use' or 'pet'.",
    startLocation: 100,
    look: {
      description: "You really shouldn't be here."
    }
  },
  'l100': {
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
      record: take('record')
    }
  },
  'l200': {
    title: "In Front of Da Housss",
    go: { woods: 100, south: 100, west: 300, garage: 210 },
    look: {
      description: "You're in front of da housss.  It's pretty normal looking, except for the fact that it's enormous and purple and has a few well-kept basketball courts.  There is a little red corvette parked in the open garage.  You think you smell waffles. There is a tall gate surrounding the property.",
      gate: "The gate has a strange symbol at the top. It looks impenetrable.",
      hudson: "Hudson's being Hudson, and pulling his leash to the west.  Maybe he smells something...",
      woods: "You know, they really weren't all that scary actually. You could go back there. It'd be nbd.",
      car: "It's the kind you'd buy at a second hand store.  No, wait...",
      garage: "It's wide open.",
      house: "The place is a palace, decidedly regal.",
      waffles: "There's a cartoon-like smoke trail coming from a plate on the upstairs window sill.  That must be where the waffles are cooling.",
      basketball: "These courts are immaculate, but not disused.  Whoever lives here is pretty serious about basketball.",
      symbol: "It's some kinda fancy letter 'P'."
    },
    use: {
      gate: (s) => {
        if( s.inventory.indexOf('gate_key') == -1 ) {
          return "You can't do that, it's *very* locked.";
        } else {
          return "Wow, and I didn't even put a key in this game.  Impressive.";
        }
      }
    }
  },
  'l210': {
    title: "An Enchanting Garage",
    go: { out: 200, house: 200 },
    look: {
      description: "The little red corvette actually doesn't hold up too well on closer inspection.  It's clean but clearly hasn't been used in years.  There's not much to report otherwise.",
      car: "It's parked sideways.  You try the doors but they're locked.",
      hudson: "Hudson is just kinda sittin' there.",
    }
  },
  'l300': {
    title: "The Clifftop",
    go: { east: 200, house: 200, west: 310, cave: 310, in: 310 },
    look: {
      description: "Hudson sniffed out a cave! It's pretty small, but who knows how deep it goes. It's too dark to see much. There is a musky breeze coming from the cave.",
      hudson: "If you didn't know better, you'd say he was proud of his find.  Also he's licking himself with a subtle kind of dignity.",
      house: "The house is back to the east, you can't quite see it.",
      cave: "The mouth of the cave is about 20 feet down a steepish hill, and you can only see about 10 feet inside it before it's just black.  The ground leading up to it is pretty muddy...",
      mud: "It's brown and mud-like.  Looks awfully slippery...",
    }
  },
  'l310': {
    title: "Mouth of the Cave",
    go: { in: 320, west: 320, cave: 320 },
    look: {
      description: "You take a step down the hill and immediately start sliding, all the way down the cave's entrance.  You probably can't go back the way you came.  There's a rusted out old Plymouth Valiant submerged in the mud.  Only its trunk is sticking out.",
      hudson: "Hudson sneezes and shakes off some mud.",
      cave: (s) => {
        if( s.inventory.indexOf('flashlight') > -1 ) {
          return "With the flashlight you can see further into the cave, but it just goes and goes.  You'll have to go inside to see more.";
        } else {
          return "You can't more than a few feet into the cave, it's pitch black."
        }
      },
      hill: "There's a clear track in the hill behind you where you slid down.  It's probably too slippery to go back up without some help.",
      valiant: "It's definitely early '60s based on its vestigial fins. The trunk is the only part that's sticking out.",
      trunk: "With the gentlest suggestion the trunk pops open, and there's a flashlight inside!  How convenient.",
    },
    take: {
      flashlight: take('flashlight')
    },
  },
  'l320': {
    title: "Into the cave",
    go: { north: 330, light: 330, forward: 330, back: 310, south: 310, out: 310 },
    look: {
      description: (s) => {
        if( s.inventory.indexOf('flashlight') == -1 ) {
          return "It's way too dark to see anything.  You clap and a distant echo returns a couple seconds later.  Yikes.  You're gonna need some way to produce light...";
        } else {
          return "You're pretty deep in the cave now.  As you sweep your light around it, there's an occasional flutter of black wings.  There are stalactites and sparkling quartz crystals everywhere, and small glowing firefly lights flicker here and there.  Away from your flashlight they are they only lights you see, except for a very dull glow to the north.";
        }
      },
      hudson: "Hudson seems honestly a little freaked out, but more because of all the tiny creatures he could be murdering around here.",
      ground: "The ground is moist rock with ancient looking formations jutting out here and there.  There is a pretty clear path ahead of you toward the north."
    }
  },
  'l330': {
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
      snack: "You forgot your wallet."
    },
  },
  'l340': {
    title: "Inside the Elevator",
    go: { lobby: 400, cave: 330 },
    look: {
      description: "It's a totally normal elevator, except it's only got two buttons: 'Lobby' and 'Cave'.  Waters of March is playing.",
      hudson: "He's waiting patiently.",
      elevator: "Seen one, you've seen 'em all.'"
    },
  },
  'l400': {
    title: "A Lobby Fit For A...",
    go: { elevator: 340, kitchen: 410 },
    look: {
      description: "You're in what must be the mansion you saw earlier. You're surrounded by glass, a grand piano on the other side of the room is being tuned by someone who looks like they've been doing it a long while. You hear kitcheny sounds and what sounds like Car Talk coming from the kitchen.  Someone must be in there.",
      hudson: "Hudson's sniffing pretty hard in the direction of the kitchen",
      piano: "It's currently in the middle of some very delicate looking adjustments.",
      elevator: "You could get back in, but why go back down to the cave?",
      kitchen: "You can't see much from here, but the aroma of waffles is overpowering."
    },
    use: {
      piano: "I don't think the piano tuner would appreciate that.",
    },
  },
  'l410': {
    title: "In Prince's Kitchen",
    go: { elevator: 340, kitchen: 410, waffle: 500 },
    look: {
      description: "There he is.  It's Prince.  He's wearing an immaculate apron and operating two waffle makers at the same time, all the while looking as cool as heck somehow.  'Ashley,' Prince says to you. 'You look like you need a waffle.' He extends to you the most amazing waffle you've ever seen.  13 lawyers are on the other side of the room, chewing in near perfect unison.",
      hudson: "Hudson who?",
      prince: "He looks amazing, but he's probably already suing me for saying so.",
      lawyers: "Don't worry about them.",
      waffle: `It's the ${r(['Carl Sagan', 'Ann Druyan', 'Michael Stipe', 'Thom Yorke', 'Bjork', 'Joe Biden'])} of waffles. You need it.`
    },
    take: {
      waffle: "You can't take it.  You must go to it."
    },
    use: {
      piano: "I don't think the piano tuner would appreciate that.",
    },
  },
  'l500': {
    title: "Nirvana",
    go: { },
    look: {
      description: "The flavor of the waffle just takes you away. You float into a staggering purple beyond and soon there's nothing around you but warmth and safety. You've achieved the infinite. That really was some waffle.  ...THE END."
    }
  },
};

export default GameData;
