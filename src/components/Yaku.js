import propTypes from "prop-types";

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
    <div>
      <strong>speed:</strong>
      <span>{` ${mapSpeedToString[speed]}`}</span>
    </div>
    <div>
      <strong>difficulty:</strong>
      <span>{` ${mapDifficultyToString[difficulty]}`}</span>
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
      <div>
        <label>Example</label>
        <div>{example}</div>
      </div>
    )}
  </div>
);

Yaku.propTypes = {
  name: propTypes.string,
  aka: propTypes.string,
  description: propTypes.string,
  closed: propTypes.array,
  open: propTypes.array,
  speed: propTypes.number,
  difficulty: propTypes.number,
  example: propTypes.arrayOf(propTypes.number),
};

export default Yaku;
