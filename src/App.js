import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [birthdate, setBirthDate] = useState("");
  var [lucky, setLuckyNumber] = useState(0);
  function birthdayHandler(event) {
    setBirthDate(event.target.value);
  }
  function luckyHandler(e) {
    setLuckyNumber(e.target.value);
  }
  function calculateBirth(date) {
    var sum = 0;
    var replace = date.replaceAll("-", "");

    for (var i = 0; i < replace.length; i++) {
      sum = sum + Number(replace.charAt(i));
    }
    return sum;
  }
  function submitHandler() {
    var birth = calculateBirth(birthdate);

    setTimeout(() => {
      setLuckyNumber(birth);
      console.log(birth);
    }, 1000);
  }
  return (
    <div className="App">
      <h1>Let see your Birthdate is Lucky?</h1>

      <label style={{ display: "block" }}>Birthday </label>
      <input
        style={{ textAlign: "center" }}
        type="date"
        onChange={birthdayHandler}
      ></input>
      <label style={{ display: "block" }}>Lucky Number</label>
      <input
        type="number"
        style={{ textAlign: "center" }}
        onChange={luckyHandler}
      ></input>
      <button style={{ display: "block" }} onClick={submitHandler}>
        Sumbit
      </button>
      <h1>{birthdate}</h1>
      <h1>{lucky}</h1>
    </div>
  );
}
