import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [bithdate, setBirthDate] = useState("");
  var [lucky, setLuckyNumber] = useState(0);
  function birthdayHandler(event) {
    setLuckyNumber(event.target.value);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label style={{ display: "block" }}>Birthday </label>
      <input onChange={birthdayHandler}></input>
      <label style={{ display: "block" }}>Lucky Number</label>
      <input onChange={birthdayHandler}></input>
      <h1>{lucky}</h1>
    </div>
  );
}
