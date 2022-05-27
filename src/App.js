import { useCallback, useMemo, useState } from "react";

import Yaku from "./components/Yaku";
import Icon from "./components/Icon";
import yakus from "./functions/yakus";
import logo from "./svgs/logo.svg";
import "./App.less";
import Separator from "./components/Separator";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredYakus = useMemo(
    () =>
      yakus.filter(
        ({ name, aka }) =>
          name.includes(searchValue) || aka.includes(searchValue)
      ),
    [searchValue]
  );

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <>
      <div className="App__header">
        <Icon src={logo} alt="Mahjong Helper logo" size="big" />
        <h1>Mahjong Helper</h1>
      </div>
      <p>How do I play?</p>

      <div>
        <h2>Yakus</h2>
        <Separator />
        <div className="Yakus__bar">
          <button>Filter</button>
          <input placeholder="Search by name" onChange={handleSearchChange} />
        </div>
        <div className="Yakus__list">
          {filteredYakus.map((yaku, index) => (
            <Yaku key={`yaku-${index}`} {...yaku} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
