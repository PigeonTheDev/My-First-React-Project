import React from "react";
import { useState } from "react";
import "./OurForm.css";

export const OurForm = (props) => {
  const [mail, setMail] = useState("");

  const [pass, setPass] = useState("");

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const onClickFormSubmit = () => {
    props.onClick(mail + " " + pass); // nedense password u renderlamıyordu böyle yapınca renderladı
  };

  return (
    <div className="form2">
      <h1>Please enter your information</h1>

      <input className="inp" placeholder="E-mail" onChange={handleMailChange} type="text" />

      <input placeholder="Password" className="inp" onChange={handlePassChange} type="text" />

      <button className="btn" onClick={onClickFormSubmit}>
        Submit
      </button>
    </div>
  );
};
