import React from "react";
import { useState } from "react";
import "./ageinp.css";

export const AgeEntry = (props) => {
  const [age, setAge] = useState(0);
  const saveAgeChange = (event) => {
    setAge(event.target.value);
  };

  const onClickAgeSubmit = () => {
    props.onClick(age);
  };

  return (
    <div id="ageInp">
      <h1>Please Enter your Age</h1>
      <input className="age" type="number" onChange={saveAgeChange} placeholder="Your age" />
      <button onClick={onClickAgeSubmit} className="btn">
        Submit
      </button>
    </div>
  );
};
