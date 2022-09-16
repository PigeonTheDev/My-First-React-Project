import React from "react";
import { useState } from "react";
import "./ageinp.css";

export const AgeEntry = (props) => {
  const [age, updtage] = useState(0);
  const saveAge = (event) => {
    updtage(event.target.value);
  };
  const Submit = () => {
    props.onClick(age);
  };
  return (
    <div id="ageInp">
      <h1>Please Enter your Age</h1>
      <input
        className="age"
        type="number"
        onChange={saveAge}
        placeholder="Your age"
      />
      <button onClick={Submit} className="btn">
        Submit
      </button>
    </div>
  );
};
