import yakus from "./yakus";
import Yaku from "./components/Yaku";
import "./App.less";

const App = () => (
  <>
    <h1>Mahjong Helper</h1>
    <p>How do I play?</p>

    <div>
      <h2>Yakus</h2>
      {/* <span className="Separator" role="presentation" /> */}
      <div className="Yakus__bar">
        <button>Filter</button>
        <input placeholder="Search by name" />
      </div>
      <div className="Yakus__list">
        {yakus.map((yaku, index) => (
          <Yaku key={`yaku-${index}`} {...yaku} />
        ))}
      </div>
    </div>
  </>
);

export default App;
