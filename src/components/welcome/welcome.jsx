import React from "react";
import { useState } from "react";
import "./welcome.css";

export const Welcome = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const closeOnClick = () => {
    setIsFirstTime(false);
  };
  if (isFirstTime) {
    return (
      <>
        <div className="container">
          <div className="welcome">
            Hoşgeldin bi daha gelme
            <button onClick={closeOnClick}>Close</button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
