import yakus from "./yakus";
import "./App.less";

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

const App = () => (
  <div>
    <h1>Mahjong Helper</h1>
    <p>How do I play?</p>

    <div>
      <h2>Yakus</h2>
      {/* <span className="Separator" role="presentation" /> */}
      <div>
        <button>Filter</button>
        <input placeholder="Search by name" />
      </div>
      <div>
        {yakus.map(
          ({
            name,
            aka,
            description,
            closed,
            open,
            speed,
            difficulty,
            example,
          }) => (
            <div className="Yaku" key={name.replaceAll(" ", "-")}>
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
                    ? `: ${closed[1]}${
                        typeof closed[1] === "number" ? " han" : ""
                      }`
                    : ""}
                </div>
                <div
                  className={`Yaku__handType${
                    open ? "" : " Yaku__handType--false"
                  }`}
                >
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
          )
        )}
      </div>
    </div>
  </div>
);

export default App;
