import React from "react";
import "../styles/Canvas.css";
import { useSelector, useDispatch } from "react-redux";
import { selectColor, changedColor } from "../features/color/colorSlice";

function Canvas() {
  const bgcolor = useSelector(selectColor); //get the most recent value of the state
  const dispatch = useDispatch();

  //calling dispatch inside handler is one way and
  //calling dispatch directly insise onClick is another way
  const handleChangedColor = (newColor) => {
    console.log("handleChange: ", newColor);
    dispatch(changedColor(newColor));
  };

  return (
    <>
      <div className="component">
        <div className="color-container" style={{ backgroundColor: bgcolor }}>
          <p>{bgcolor}</p>
        </div>
        <div className="color-button-container">
          <button
            className="blue"
            onClick={() => dispatch(changedColor("#6F61C0"))}
          >
            Blue
          </button>
          <button
            className="teal"
            onClick={() => handleChangedColor("#22A699")}
          >
            Teal
          </button>
          <button
            className="mint"
            onClick={() => dispatch(changedColor("#85E6C5"))}
          >
            Mint
          </button>
          <button
            className="yellow"
            onClick={() => dispatch(changedColor("#FFC436"))}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default Canvas;
