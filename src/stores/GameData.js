const GameData = [
  {
    id: 100,
    title: "The Scary Woods",
    go: { north: 200 },
    look: {
      description: "You're in some pretty scary woods all right.  Hudson is with you and is frantically sniffing the ground for traces of squirrel.  There is a small house to the north.",
      hudson: "So smart, and yet so dumb at the same time.",
      woods: "They are very scary indeed.  I think it's the soundtrack that's doing it. As you look around, you realize the sound of the wind seems to be skipping a bit.",
      ground: "Just ordinary ground.",
      squirrel: "Hudson is a sucker for squirrels.",
      house: "You can just see the top above the trees. It's pointy and standard-ish.",
      west: "Not much to see over there.",
      east: "Sky to the east is getting dark. It must be late afternoon."
    }
  },
  {
    id: 200,
    title: "In Front of Da Housss",
    go: { south: 100, west: 300 },
    look: {
      description: "You're in front of da housss.  It's pretty normal looking, except for the fact that it's enormous and purple and has a few well-kept basketball courts.  You think you smell waffles.",
      hudson: "Hudson's pulling his leash to the west, he must smell something.",
      woods: "You know, they really weren't all that scary actually.",
      house: "The place is a palace, decidedly regal.",
      waffles: "There's a cartoon-like smoke trail coming from a plate on the upstairs window sill.  That must be where the waffles are cooling.",
      basketball: "These courts are immaculate, but not disused.  Whoever lives here is pretty serious about basketball.",
    }
  },
  {
    id: 300,
    title: "In front of the cave",
    go: { east: 200, house: 200, west: 310, cave: 310 },
    look: {
      description: "Hudson sniffed out a cave! It's pretty small, but who knows how deep it goes.",
      hudson: "If you didn't know better, you'd say he was proud of his find.",
      house: "The house is back to the east.",
      cave: "The mouth of the cave is about 20 feet down a steepish hill, and the ground is pretty muddy."
    }
  },
  {
    id: 310,
    title: "In the cave entrance",
    go: { in: 320, west: 320, cave: 320 },
    look: {
      description: "As you walked down the ravine, your feet gave out from under you and you slid all the way down to the entrance.  It doesn't look like you can go back the way you came.",
      hudson: "Hudson sneezes and shakes off some mud.",
      cave: "Now that you're inside, you clap and hear the reverberations of the cave.  It must go on for miles.",
    }
  }
];

export default GameData;
