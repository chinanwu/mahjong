import PropTypes from "prop-types";
import Accordion from "./Accordion";

import Tile from "./Tile";
import "./Yaku.less";

const mapSpeedToString = {
  "-1": "varies",
  0: "instant",
  1: "very fast",
  2: "fast",
  3: "medium",
  4: "slow",
  5: "very slow",
  6: "extremely slow",
};

const mapDifficultyToString = {
  "-1": "varies",
  1: "very easy",
  2: "easy",
  3: "medium",
  4: "hard",
  5: "very hard",
  6: "the most difficult",
  99: "luck",
};

const Yaku = ({
  name,
  aka,
  description,
  closed,
  open,
  speed,
  difficulty,
  example,
}) => (
  <div className="Yaku">
    <div className="Yaku__name">{name}</div>
    <div className="Yaku__aka">
      <strong>aka:</strong>
      {` "${aka}"`}
    </div>
    <div>
      <strong>description:</strong> {description}
    </div>
    <div className="Yaku__speedDifficulty">
      <div>
        <strong>speed:</strong>
        <div
          className={`Yaku__speedDifficultyIcon Yaku__speedDifficultyIcon--${speed}`}
        />
        {mapSpeedToString[speed]}
      </div>
      <div>
        <strong>difficulty:</strong>
        <div
          className={`Yaku__speedDifficultyIcon Yaku__speedDifficultyIcon--${difficulty}`}
        />
        {mapDifficultyToString[difficulty]}
      </div>
    </div>
    <div className="Yaku__handTypes">
      <div className="Yaku__handType">
        <span>closed</span>
        {closed && closed[0]
          ? `: ${closed[1]}${typeof closed[1] === "number" ? " han" : ""}`
          : ""}
      </div>
      <div className={`Yaku__handType${open ? "" : " Yaku__handType--false"}`}>
        <span>open</span>
        {open && open[0]
          ? `: ${open[1]}${typeof open[1] === "number" ? " han" : ""}`
          : ""}
      </div>
    </div>
    {example && (
      <Accordion label="Example">
        <div className="Yaku__tiles">
          {example.map((tile, index) => (
            <Tile key={`tile-${index}`} identifier={tile} />
          ))}
        </div>
      </Accordion>
    )}
  </div>
);

Yaku.propTypes = {
  name: PropTypes.string,
  aka: PropTypes.string,
  description: PropTypes.string,
  closed: PropTypes.array,
  open: PropTypes.array,
  speed: PropTypes.number,
  difficulty: PropTypes.number,
  example: PropTypes.arrayOf(PropTypes.number),
};

export default Yaku;
