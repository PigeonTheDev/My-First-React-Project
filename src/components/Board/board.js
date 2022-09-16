import "./board.css";
import { AgeEntry } from "../Age/ageinp";
import { Myform } from "../Myform/Myform";

export const Board = () => {
  const getAge = (age) => {
    const ageEl = document.getElementById("ageEl");
    ageEl.append(age);
  };
  const getInfo = (email, passw) => {
    const infoEl = document.getElementById("infoEl");
    infoEl.append(email, " ", passw);
  };

  return (
    <>
      <AgeEntry onClick={getAge} />

      <Myform onClick={getInfo} />

      <label>
        <h3 id="ageEl">Your Age:</h3>
        <h3 id="infoEl">Your Info:</h3>
      </label>
    </>
  );
};
