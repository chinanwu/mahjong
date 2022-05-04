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

// This could be in a separate js file, but that means another file to pull
const yakus = [
  {
    name: 'riichi',
    aka: 'ready hand',
    description: 'This is a special yaku applied to closed tenpai hands, which requires the player to make a declaration and "wager".',
    closed: [true, 1],
    example: [ 1, 2, 3, 7, 7, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'tsumo',
    aka: 'self draw',
    description: 'This yaku may apply to any closed hand. Any player who draws a winning tile with a closed hand is awarded this yaku.',
    closed: [true, 1],
    example: [ 1, 2, 3, 7, 7, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'ippatsu',
    aka: 'one shot',
    description: 'This is applied when the player calling riichi wins within 4 tile draws/discards. In addition, the cycle must not be interrupted by tile calls.',
    closed: [true, 1]
  },
  {
    name: 'pinfu',
    aka: 'all sequences',
    description: 'Typically known as "all sequences", this is a hand that does not gain fu based on composition, other than that of a closed ron.',
    closed: [true, 1],
    example: [ 1, 2, 3, 5, 6, 7, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'iipeikou',
    aka: 'identical sequences',
    description: 'This hand includes two identical sequences.',
    // open: [false, 0],
    closed: [true, 1],
    example: [ 1, 2, 3, 1, 2, 3, 25, 26, 27, 11, 12, 13, 36, 36]
  },
  {
    name: 'haitei raoyue',
    aka: 'win by last draw',
    description: 'This hand is completed with the last tile on the wall.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'houtei raoyui',
    aka: 'win by last discard',
    description: 'This hand is completed with the very last discarded tile.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'rinshan kaihou',
    aka: 'dead wall draw',
    description: 'This yaku is awarded upon winning with a tile from the dead wall.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'chankan',
    aka: 'robbing a kan',
    description: 'The winning tile for a hand is called on another player\'s Kan. Essentially, the tile needed to complete a Kan is stolen to complete a winning hand.',
    open: [true, 1],
    closed: [true, 1]
  },
  {
    name: 'tanyao',
    aka: 'all simples',
    description: 'A hand composed of only inside (numbers 2-8) tiles.',
    open: [true, 1],
    closed: [true, 1],
    example: [2, 2, 2, 4, 4, 12, 12, 12, 13, 14, 15, 22, 23, 24]
  },
  {
    name: 'yakuhai',
    aka: 'value tiles',
    description: 'A hand with at least one group of dragon tiles, seat wind, or round wind tiles. This hand can be valued at 1 han for each group.',
    open: [true, 1],
    closed: [true, 1],
    example: [1, 2, 3, 4, 4, 12, 12, 12, 13, 14, 15, 30, 30, 30]
  },
  {
    name: 'double riichi',
    aka: 'double ready',
    description: 'Riichi is declared with a dealt hand before the first discard.',
    // open: [false, 0],
    closed: [true, 1]
  },
  {
    name: 'chantaiyao',
    aka: 'terminal or honor in each group',
    description: 'All tile groups contain at least 1 terminal or honor.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 7, 8, 9, 21, 21, 21, 11, 12, 13, 31, 31]
  },
  {
    name: 'sanshoku doujun',
    aka: 'three coloured straight',
    description: 'Three sequences have the same number across the three different suits.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 21, 22, 23, 21, 21, 21, 11, 12, 13, 31, 31]
  },
  {
    name: 'ittsu',
    aka: 'straight',
    description: 'This hand has a complete sequence of 1 through 9 of a single suit. As a note, the sequence of 1-9 are actually three groups of sequences numbered 123, 456, and 789.',
    open: [true, 1],
    closed: [true, 2],
    example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 31, 31]
  },
  {
    name: 'toitoi',
    aka: 'all triplets',
    description: 'The entire hand is composed of triplets.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 9, 12, 12, 12, 35, 35, 35, 30, 30]
  },
  {
    name: 'sanankou',
    aka: 'three concealed triplets',
    description: 'The hand includes three groups of triplets (or closed quads) that have been formed without calling any tiles. The fourth group can be an open triplet or sequence.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 9, 12, 13, 14, 35, 35, 35, 30, 30]
  },
  {
    name: 'sanshoku douku',
    aka: 'three coloured triplets',
    description: 'The hand includes three groups of triplets with the same number.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 7, 8, 9, 21, 21, 21, 11, 11, 11, 30, 30]
  },
  {
    name: 'sankantsu',
    aka: 'three kans',
    description: 'Three kans are called for this hand.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 1, 21, 21, 21, 21, 11, 11, 11, 11, 30, 30]
  },
  {
    name: 'chiitoitsu',
    aka: 'seven pairs',
    description: 'This hand is composed of seven pairs. It is one of two exceptions to the standard 4 tile groups and a pair pattern.',
    // open: [false, 0],
    closed: [true, 2],
    example: [1, 1, 3, 3, 21, 21, 25, 25, 11, 11, 12, 12, 30, 30]
  },
  {
    name: 'honroutou',
    aka: 'terminals and honours',
    description: 'The hand is composed of nothing but all terminals and honors. This hand may be considered as 4 han, because it is impossible to score this hand without either chii toitsu or toi toi.',
    open: [true, 2],
    closed: [true, 2],
    example: [1, 1, 1, 9, 9, 19, 19, 19, 21, 21, 21, 30, 30, 30]
  },
  {
    name: 'shousangen',
    aka: 'small three dragons',
    description: 'The hand contains two sets of 3 dragon tiles and a pair of the third dragon tiles. This hand may be considered as 4 han, because it is impossible to score this hand without two sets of yakuhai, from the two sets of dragons.',
    open: [true, 2],
    closed: [true, 2],
    example: [6, 7, 8, 31, 31, 31, 32, 32, 30, 30, 30, 2, 3, 4]
  },
  {
    name: 'honitsu',
    aka: 'half flush',
    description: 'This is a single suit hand mixed with some honor tiles.',
    open: [true, 2],
    closed: [true, 3],
    example: [6, 6, 6, 7, 8, 9, 31, 31, 32, 32, 32, 1, 2, 3]
  },
  {
    name: 'junchan taiyao',
    aka: 'terminal in each meld',
    description: 'All sets contain at least one terminal.',
    open: [true, 2],
    closed: [true, 3],
    example: [1, 1, 9, 9, 9, 17, 18, 19, 21, 22, 23, 21, 22, 23]
  },
  {
    name: 'ryanpeikou',
    aka: 'two sets of identical sequences',
    description: 'This hand has two sets of "iipeikou". This hand does not combine with chii toitsu, even though the hand can be interpreted as one.',
    // open: [false, 0],
    closed: [true, 3],
    example: [4, 4, 5, 5, 6, 6, 16, 16, 17, 17, 18, 18, 22, 22]
  },
  {
    name: 'chinitsu',
    aka: 'flush',
    description: 'This hand is composed entirely of tiles from only one of the three suits. It is the only yaku set at 6 han, where the number drops to 5 han when opened.',
    open: [true, 5],
    closed: [true, 6],
    example: [11, 12, 13, 13, 14, 15, 15, 16, 16, 17, 18, 19, 19, 19]
  },
  {
    name: 'kazoe yakuman',
    aka: 'counted yakuman',
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
    aka: 'four concealed triplets',
    description: 'This hand is composed of four groups of closed triplets. When this hand has a shanpon pattern and the win is via ron, then it would not be counted as such; only as the lesser toitoi with sanankou.',
    // open: [false, 0],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 14, 14, 14, 28, 28, 28, 31, 31, 31, 33, 33]
  },
  {
    name: 'daisangen',
    aka: 'big three dragons',
    description: 'This hand possesses three groups (triplets or quads) of all the dragons.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 15, 15, 30, 30, 30, 31, 31, 31, 32, 32, 32]
  },
  {
    name: 'shousuushii',
    aka: 'little four winds',
    description: 'This hand has three groups (triplets or quads) of the wind tiles plus a pair of the fourth kind.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 2, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36]
  },
  {
    name: 'daisuushii',
    aka: 'big four winds',
    description: 'This hand has four groups (triplets or quads) of all four wind tiles.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36]
  },
  {
    name: 'tsuuiisou',
    aka: 'all honours',
    description: 'Every group of tiles are composed of honor tiles.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36]
  },
  {
    name: 'chinroutou',
    aka: 'all terminals',
    description: 'Every group of tiles are composed of terminal tiles.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [1, 1, 9, 9, 9, 11, 11, 11, 19, 19, 19, 21, 21, 21]
  },
  {
    name: 'ryuuiisou',
    aka: 'all green',
    description: 'A hand composed entirely of green tiles: 2, 3, 4, 6 and 8 Sou and/or Hatsu.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [2, 2, 3, 3, 4, 4, 6, 6, 6, 8, 8, 31, 31, 31]
  },
  {
    name: 'chuuren poutou',
    aka: 'nine gates',
    description: 'A hand consisting of the tiles 1112345678999 in the same suit plus any one extra tile of the same suit.',
    closed: [true, 'yakuman'],
    example: [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9]
  },
  {
    name: 'suukantsu',
    aka: 'four kans',
    description: 'Any hand with four calls of kan.',
    open: [true, 'yakuman'],
    closed: [true, 'yakuman'],
    example: [1, 1, 1, 1, 12, 12, 12, 12, 28, 28, 28, 28, 31, 31, 31, 31]
  },
  {
    name: 'tenhou',
    aka: 'heavenly hand',
    description: 'The dealer hand is a winning hand even before discarding a tile.',
    closed: [true, 'yakuman'],
    example: [1, 2, 3, 6, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 22, 22]
  },
  {
    name: 'chiihou',
    aka: 'earthly hand',
    description: 'The non-dealer hand is a winning hand with the first tile draw.',
    closed: [true, 'yakuman'],
    example: [1, 2, 3, 6, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 22, 22]
  },
  {
    name: 'nagashi mangan',
    aka: 'nagashi mangan',
    description: 'All the discards are terminals and/or honors. In addition, none of these discards were called by other players.',
    closed: [true, 'yakuman'],
  },
];
// TODO
// - Consider how to make translation of yakus ?

const getOpenHands = () => yakus.filter(({open}) => open);

console.log(getOpenHands());