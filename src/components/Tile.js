import PropTypes from "prop-types";

import {
  BambooOne,
  BambooTwo,
  BambooThree,
  BambooFour,
  BambooFive,
  BambooSix,
  BambooSeven,
  BambooEight,
  BambooNine,
} from "./tiles/Bamboo";
import {
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
  CircleFive,
  CircleSix,
  CircleSeven,
  CircleEight,
  CircleNine,
} from "./tiles/Circle";
import {
  HonourWhite,
  HonourGreen,
  HonourRed,
  HonourNorth,
  HonourEast,
  HonourSouth,
  HonourWest,
} from "./tiles/Honour";
import {
  ManzuOne,
  ManzuTwo,
  ManzuThree,
  ManzuFour,
  ManzuFive,
  ManzuSix,
  ManzuSeven,
  ManzuEight,
  ManzuNine,
} from "./tiles/Manzu";

import "./Tile.less";

const mapIdentifierToTile = {
  1: BambooOne,
  2: BambooTwo,
  3: BambooThree,
  4: BambooFour,
  5: BambooFive,
  6: BambooSix,
  7: BambooSeven,
  8: BambooEight,
  9: BambooNine,
  11: ManzuOne,
  12: ManzuTwo,
  13: ManzuThree,
  14: ManzuFour,
  15: ManzuFive,
  16: ManzuSix,
  17: ManzuSeven,
  18: ManzuEight,
  19: ManzuNine,
  21: CircleOne,
  22: CircleTwo,
  23: CircleThree,
  24: CircleFour,
  25: CircleFive,
  26: CircleSix,
  27: CircleSeven,
  28: CircleEight,
  29: CircleNine,
  30: HonourWhite,
  31: HonourGreen,
  32: HonourRed,
  33: HonourNorth,
  34: HonourEast,
  35: HonourSouth,
  36: HonourWest,
};

const Tile = ({ identifier }) => {
  const TileComponent = mapIdentifierToTile[identifier];
  return <TileComponent className="Tile__component" />;
};

Tile.propTypes = {
  identifier: PropTypes.number,
};

export default Tile;
