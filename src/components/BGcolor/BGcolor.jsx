import { useState } from "react";
import "./BGcolor.css";

export const BGcolor = () => {
  const [colorInput, setColorInput] = useState("white");
  const onChangeColor = (event) => {
    setColorInput(event.target.value);
  };

  return (
    <>
      <div
        className="BG"
        style={{
          backgroundColor: `${colorInput}`,
        }}
      >
        <input type="text" placeholder="Enter a color or a code" onChange={onChangeColor} />
      </div>
    </>
  );
};
