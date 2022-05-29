import { useCallback, useMemo, useState } from "react";

import logo from "./svgs/logo.svg";
import salmon from "./svgs/salmon.svg";
import Yaku from "./components/Yaku";
import Icon from "./components/Icon";
import Separator from "./components/Separator";
import yakus from "./constants/yakus";

import "./App.less";

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredYakus = useMemo(
    () =>
      yakus.filter(
        ({ name, aka }) =>
          name.includes(searchValue) || aka.includes(searchValue)
      ),
    [searchValue]
  );

  const handleSearchChange = useCallback(
    (e) => setSearchValue(e.target.value.toLowerCase()),
    []
  );

  const handleFilterToggle = useCallback(
    () => setIsFilterOpen((isFilterOpen) => !isFilterOpen),
    []
  );

  return (
    <>
      <div className="App__header">
        <Icon src={logo} alt="Mahjong Helper logo" size="big" />
        <h1>Mahjong Helper</h1>
      </div>
      <p>How do I play?</p>

      <div className="Yakus">
        <h2>Yakus</h2>
        <Separator />
        <div className="Yakus__bar">
          <button
            className={`Yakus__filterButton ${
              isFilterOpen ? "Yakus__filterButton--squareBottom" : ""
            }`}
            onClick={handleFilterToggle}
          >
            Set filters
          </button>
          <input placeholder="Search by name" onChange={handleSearchChange} />
        </div>
        <div
          className={`Yakus__filterBox${
            isFilterOpen ? "" : " Yakus__filterBox--hidden"
          }`}
          aria-hidden={!isFilterOpen}
        >
          <div>
            <legend>hand style</legend>
            <Separator />
            <input type="radio" id="filterOpen" name="handStyle" value="Open" />
            <label htmlFor="filterOpen">Open</label>
            <input
              type="radio"
              id="filterClosed"
              name="handStyle"
              value="Closed"
            />
            <label htmlFor="filterClosed">Closed</label>
            <input
              type="radio"
              id="filterAllHands"
              name="handStyle"
              value="All"
            />
            <label htmlFor="filterAllHands">All</label>
          </div>
          <div>
            <legend>difficulty</legend>
            <Separator />
            <input type="range" min="1" max="6" />
          </div>
          <div>
            <legend>speed</legend>
            <Separator />
            <input type="range" min="1" max="6" />
          </div>
          <div>
            <legend>han amount</legend>
            <Separator />
            <input type="range" min="1" max="6" />
          </div>
          <div>
            <legend>yaku type</legend>
            <Separator />
            <input type="radio" id="filterYaku" name="yakuType" value="Yaku" />
            <label htmlFor="filterYaku">Yaku</label>
            <input
              type="radio"
              id="filterYakuman"
              name="yakuType"
              value="Yakuman"
            />
            <label htmlFor="filterYakuman">Yakuman</label>
            <input
              type="radio"
              id="filterAllYakuTypes"
              name="yakuType"
              value="All"
            />
            <label htmlFor="filterAllYakuTypes">All</label>
          </div>
          <button>Apply filters</button>
        </div>
        {filteredYakus.length !== 0 ? (
          <div className="Yakus__list">
            {filteredYakus.map((yaku, index) => (
              <Yaku key={`yaku-${index}`} {...yaku} />
            ))}
          </div>
        ) : (
          <p className="Yakus__emptyList">No yakus found!</p>
        )}
      </div>

      <footer className="App__footer">
        <a href="https://chinanwu.com">
          <Icon src={salmon} alt="Salmon's icon" />
          <span>Made by Salmon</span>
        </a>
      </footer>
    </>
  );
};

export default App;
