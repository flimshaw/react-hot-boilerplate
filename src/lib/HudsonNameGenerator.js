var openers = [
  'Ol\'',
  'Lil\'',
  'Our',
  'My'
]

var adjectives = [
  'tiny',
  'fuzzy',
  'filthy',
  'dumb',
  'doggy',
  'brilliant',
  'beautiful',
  'charming',
  'obstinate',
  'handsome',
  'stubborn',
  'shaggy',
  'sleepy'
];

var titles = [
  'mr.',
  'dr.',
  'admiral',
  'captain',
  'detective'
];

var names = [
  'sugarman',
  'armpits',
  'kneecaps',
  'licker magoo',
  'guy',
  'doggy-man',
  'face',
  'mathlete',
  'superstar',
  'tired-guy',
  'sniffer',
  'jumper',
  'pants',
  'nose',
  'dogson'
];


export default function HudsonNameGenerator() {

  function getRandom( arr ) {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  }

  var name = [];

  name.push( getRandom( openers ) );
  name.push( getRandom( adjectives ) );

  // random chance to have more than 1 adjective
  var thresh = 0.3;
  while( Math.random() < thresh ) {
    name.push( getRandom( adjectives ) );
  }

  name.push( getRandom( titles ) );
  name.push( getRandom( names ) );

  return name.join(' ');

}
