import "./Board.css";
import { AgeEntry } from "../Age/AgeEntry";
import { Myform } from "../Myform/Myform";
import { CityList } from "../CityList/CityList";
import { useState } from "react";

export const Board = () => {
  const [age, setAge] = useState(null);
  const [info, setInfo] = useState(null);
  const [city, setCity] = useState(null);

  return (
    <>
      <AgeEntry onClick={setAge} />

      <Myform onClick={setInfo} />

      <CityList onClick={setCity} />

      <label>
        <h3>Your Age: {age}</h3>
        <h3>Cities: {city}</h3>
        <h3>Your Info: {info}</h3>
      </label>
    </>
  );
};
