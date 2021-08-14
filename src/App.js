import "./styles.css";
import { useState } from "react";
var flags = {
  "🌋": "Volcano",
  "⛰️": "Mountain",
  "🏝️": "Desert Island",
  "🏜️": "Desert",
  "🏕️": "Camping",
  "🏔️": "Snow Capped Mountain",
  "🗻": "Mountain Fuji",
  "🏖️": "Beach with Umbrella",
  "🏞️": "National Park",
  "🌏": "Globe Showing Asia & Australia"
};
var flagswehave = Object.keys(flags);
export default function App() {
  var [flag, setflag] = useState(" ");
  function inputtyped(event) {
    const inputflag = event.target.value;
    setflag(inputflag);
    if (flags[inputflag] !== undefined) {
      setflag(flags[inputflag]);
    } else setflag("We dont have this symbol");
  }
  function emojiclicked(inputflag) {
    setflag(flags[inputflag]);
  }
  return (
    <div className="App">
      <h1>Geographic Symbols</h1>
      <input onChange={inputtyped} />
      <h2>{flag}</h2>
      <h3>Symbols will appear here</h3>
      <hr />
      <div>
        {flagswehave.map(function (item) {
          return <span onClick={() => emojiclicked(item)}>{item}</span>;
        })}
      </div>
    </div>
  );
}
