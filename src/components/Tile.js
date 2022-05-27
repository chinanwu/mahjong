import PropTypes from "prop-types";

import Icon from "./Icon";

const mapIdentifierToTile = {
  1: "bamboo/1",
  2: "bamboo/2",
  3: "bamboo/3",
  4: "bamboo/4",
  5: "bamboo/5",
  6: "bamboo/6",
  6: "bamboo/6",
  7: "bamboo/7",
  8: "bamboo/8",
  9: "bamboo/9",
  11: "manzu/1",
  12: "manzu/2",
  13: "manzu/3",
  14: "manzu/4",
  15: "manzu/5",
  16: "manzu/6",
  16: "manzu/6",
  17: "manzu/7",
  18: "manzu/8",
  19: "manzu/9",
  21: "circle/1",
  22: "circle/2",
  23: "circle/3",
  24: "circle/4",
  25: "circle/5",
  26: "circle/6",
  26: "circle/6",
  27: "circle/7",
  28: "circle/8",
  29: "circle/9",
  30: "honours/white",
  31: "honours/green",
  32: "honours/red",
  33: "honours/north",
  34: "honours/east",
  35: "honours/south",
  36: "honours/west",
};

const Tile = ({ identifier }) => (
  <Icon
    src={
      require(`../svgs/tiles/${mapIdentifierToTile[identifier]}.svg`).default
    }
    alt={mapIdentifierToTile[identifier].replace("/", " ")}
  />
);

Tile.propTypes = {
  identifier: PropTypes.number,
};

export default Tile;
