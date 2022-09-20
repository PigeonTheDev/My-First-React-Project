import "./board.css";
import { AgeEntry } from "../Age/ageinp";
import { Myform } from "../Myform/Myform";
import { useState } from "react";

export const Board = () => {
  const [age, setAge] = useState(null);
  const [info, setInfo] = useState(null);

  return (
    <>
      <AgeEntry onClick={setAge} />

      <Myform onClick={setInfo} />

      <label>
        <h3 id="ageEl">Your Age: {age}</h3>
        <h3 id="infoEl">Your Info: {info}</h3>
      </label>
    </>
  );
};
