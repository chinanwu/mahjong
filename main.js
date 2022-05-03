// 36 total tiles, can go 1 - 36, where each number corresponds to a tile, e.g.
// 1 -> 9 == 1 -> 9 bamboo
// 11 -> 19 == 1 -> 9 manzu
// 21 -> 29 == 1 -> 9 pinzu
// 30 white dragon
// 31 green dragon
// 32 red dragon
// 33 north
// 34 east
// 35 south
// 36 west

const yakus = [
  {
    name: 'riichi',
    aka: 'ready hand',
    description: 'This is a special yaku applied to closed tenpai hands, which requires the player to make a declaration and "wager".',
    // open: [false, 0], TODO: just have open be null if isn't possible?s
    closed: [true, 1],
    example: [ 1, 2, 3, 7, 7, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'tsumo',
    aka: 'self draw',
    description: 'This yaku may apply to any closed hand. Any player who draws a winning tile with a closed hand is awarded this yaku.',
    // open: [false, 0],
    closed: [true, 1],
    example: [ 1, 2, 3, 7, 7, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'ippatsu',
    aka: '',
    description: 'This is applied when the player calling riichi wins within 4 tile draws/discards. In addition, the cycle must not be interrupted by tile calls.',
    // open: [false, 0],
    closed: [true, 1]
  },
  {
    name: 'pinfu',
    aka: '',
    description: 'Typically known as "all sequences", this is a hand that does not gain fu based on composition, other than that of a closed ron.',
    // open: [false, 0],
    closed: [true, 1],
    example: [ 1, 2, 3, 5, 6, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'iipeikou',
    aka: '',
    description: 'This hand includes two identical sequences.',
    // open: [false, 0],
    closed: [true, 1],
    example: [ 1, 2, 3, 1, 2, 3, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'haitei raoyue',
    aka: '',
    description: 'This hand is completed with the last tile on the wall.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'houtei raoyui',
    aka: '',
    description: 'This hand is completed with the very last discarded tile.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'rinshan kaihou',
    aka: '',
    description: 'This yaku is awarded upon winning with a tile from the dead wall.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'chankan',
    aka: '',
    description: 'The winning tile for a hand is called on another player\'s Kan. Essentially, the tile needed to complete a Kan is stolen to complete a winning hand.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'tanyao',
    aka: '',
    description: 'A hand composed of only inside (numbers 2-8) tiles.',
    open: [true, 1],
    closed: [true, 1],
    example: [2, 2, 2, 4, 4, 12, 12, 12, 13, 14, 15, 22, 23, 24]
  },
  {
    name: 'yakuhai',
    aka: '',
    description: 'A hand with at least one group of dragon tiles, seat wind, or round wind tiles. This hand can be valued at 1 han for each group.',
    open: [true, 1],
    closed: [true, 1],
    example: [1, 2, 3, 4, 4, 12, 12, 12, 13, 14, 15, 30, 30, 30]
  },
  {
    name: 'double riichi',
    aka: '',
    description: 'Riichi is declared with a dealt hand before the first discard.',
    // open: [false, 0],
    closed: [true, 1]
  },
  {
    name: 'chantaiyao',
    aka: '',
    description: 'All tile groups contain at least 1 terminal or honor.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 7, 8, 9, 21, 21, 21, 11, 12, 13, 31, 31]
  },
  {
    name: 'sanshoku doujun',
    aka: '',
    description: 'Three sequences have the same number across the three different suits.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 21, 22, 23, 21, 21, 21, 11, 12, 13, 31, 31]
  },
  {
    name: 'ittsu',
    aka: '',
    description: 'This hand has a complete sequence of 1 through 9 of a single suit. As a note, the sequence of 1-9 are actually three groups of sequences numbered 123, 456, and 789.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 31, 31]
  },
  {
    name: 'toitoi',
    aka: '',
    description: 'The entire hand is composed of triplets.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 9, 12, 12, 12, 35, 35, 35, 30, 30]
  },
  {
    name: 'sanankou',
    aka: '',
    description: 'The hand includes three groups of triplets (or closed quads) that have been formed without calling any tiles. The fourth group can be an open triplet or sequence.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 9, 12, 13, 14, 35, 35, 35, 30, 30]
  },
  {
    name: 'sanshoku douku',
    aka: '',
    description: 'The hand includes three groups of triplets with the same number.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 7, 8, 9, 21, 21, 21, 11, 11, 11, 30, 30]
  },
  {
    name: 'sankantsu',
    aka: '',
    description: 'Three kans are called for this hand.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 1, 21, 21, 21, 21, 11, 11, 11, 11, 30, 30]
  },
  {
    name: 'chiitoitsu',
    aka: '',
    description: 'This hand is composed of seven pairs. It is one of two exceptions to the standard 4 tile groups and a pair pattern.',
    // open: [false, 0],
    closed: [true, 2],
    example: [1, 1, 3, 3, 21, 21, 25, 25, 11, 11, 12, 12, 30, 30]
  },
  {
    name: 'honroutou',
    aka: '',
    description: 'The hand is composed of nothing but all terminals and honors. This hand may be considered as 4 han, because it is impossible to score this hand without either chii toitsu or toi toi.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 19, 19, 19, 21, 21, 21, 30, 30, 30]
  },
  {
    name: 'shousangen',
    aka: '',
    description: 'The hand contains two sets of 3 dragon tiles and a pair of the third dragon tiles. This hand may be considered as 4 han, because it is impossible to score this hand without two sets of yakuhai, from the two sets of dragons.',
    open: [true, 2],
    closed: [true, 2],
    example: [6, 7, 8, 31, 31, 31, 32, 32, 30, 30, 30, 2, 3, 4]
  },
  {
    name: 'honitsu',
    aka: '',
    description: 'This is a single suit hand mixed with some honor tiles.',
    open: [true, 2],
    closed: [true, 3],
    example: [6, 6, 6, 7, 8, 9, 31, 31, 32, 32, 32, 1, 2, 3]
  },
  {
    name: 'junchan taiyao',
    aka: '',
    description: 'All sets contain at least one terminal.',
    open: [true, 2],
    closed: [true, 3],
    example: [1, 1, 9, 9, 9, 17, 18, 19, 21, 22, 23, 21, 22, 23]
  },
  {
    name: 'ryanpeikou',
    aka: '',
    description: 'This hand has two sets of "iipeikou". This hand does not combine with chii toitsu, even though the hand can be interpreted as one.',
    // open: [false, 0],
    closed: [true, 3],
    example: [4, 4, 5, 5, 6, 6, 16, 16, 17, 17, 18, 18, 22, 22]
  },
  {
    name: 'chinitsu',
    aka: '',
    description: 'This hand is composed entirely of tiles from only one of the three suits. It is the only yaku set at 6 han, where the number drops to 5 han when opened.',
    open: [true, 5],
    closed: [true, 6],
    example: [11, 12, 13, 13, 14, 15, 15, 16, 16, 17, 18, 19, 19, 19]
  },
  {
    name: 'kazoe yakuman',
    aka: '',
    description: 'This is a special class of yakuman, where a hand is composed of 13+ han based on the combination of regular yaku and/or dora.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
  },
  {
    name: 'kokushi musou',
    aka: 'thirteen orphans',
    description: 'This hand has one of each of the 13 different terminal and honor tiles plus one extra terminal or honour tile. Some rules may allow double yakuman for a 13-wait set.',
    // open: [false, 0],
    closed: [true, 'yakuman'],
    example: [1, 9, 11, 19, 21, 29, 30, 31, 32, 33, 34, 35, 35, 36]
  },
  {
    name: 'suuankou',
    aka: '',
    description: 'This hand is composed of four groups of closed triplets. When this hand has a shanpon pattern and the win is via ron, then it would not be counted as such; only as the lesser toitoi with sanankou.',
    // open: [false, 0],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 14, 14, 14, 28, 28, 28, 31, 31, 31, 33, 33]
  },
  {
    name: 'daisangen',
    aka: '',
    description: 'This hand possesses three groups (triplets or quads) of all the dragons.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 15, 15, 30, 30, 30, 31, 31, 31, 32, 32, 32]
  },
  {
    name: 'shousuushii',
    aka: '',
    description: 'This hand has three groups (triplets or quads) of the wind tiles plus a pair of the fourth kind.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36]
  },
];
// TODO
// - Consider how to make translation of yakus ?