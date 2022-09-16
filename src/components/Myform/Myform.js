import React from "react";
import { useState } from "react";
import "./Myform.css";

export const Myform = (props) => {
  const [mail, mailupdt] = useState("");
  const [pass, passupdt] = useState("");
  const handlechange = (event) => {
    mailupdt(event.target.value);
  };

  const handlechange2 = (event) => {
    passupdt(event.target.value);
  };
  const Submit = () => {
    props.onClick(mail, pass);
  };
  return (
    <div className="form2">
      <h1>Please enter your information</h1>
      <input
        className="inp"
        placeholder="E-mail"
        onChange={handlechange}
        id="mailinp"
        type="text"
      />
      <input
        placeholder="Password"
        className="inp"
        onChange={handlechange2}
        id="passinp"
        type="text"
      />
      <button className="btn" onClick={Submit}>
        Submit
      </button>
    </div>
  );
};
