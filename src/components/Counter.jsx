import React, { useState } from "react";
import "../styles/Counter.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByValue,
} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector(selectCount); //get the most recent value of the state
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(2);
  const incrementValue = Number(inputValue) || 0;

  return (
    <>
      <div className="component">
        <div className="counter-container">
          <p>{count}</p>
        </div>
        <div className="counter-button-container">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <input
            className="textbox"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => dispatch(incrementByValue(incrementValue))}>
            Add Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
