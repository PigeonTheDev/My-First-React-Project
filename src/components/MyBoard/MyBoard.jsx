import "./MyBoard.css";
import { AgeEntry } from "../Age/AgeEntry";
import { OurForm } from "../OurForm/OurForm";
import { useState } from "react";
import { BGcolor } from "../BGcolor/BGcolor";

export const MyBoard = () => {
  const [age, setAge] = useState(null);
  const [info, setInfo] = useState(null);

  return (
    <>
      <AgeEntry onClick={setAge} />

      <OurForm onClick={setInfo} />

      <BGcolor />

      <label>
        <h3>Your Age: {age}</h3>
        <h3>Your Info: {info}</h3>
      </label>
    </>
  );
};
