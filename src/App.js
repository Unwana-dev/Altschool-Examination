import React, { useReducer } from "react";
import { reducer } from "./reducer.js";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseValue = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decreaseValue = () => {
    dispatch({ type: "DECREMENT" });
  };

  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <main>
      <div id="first-container">
        <div class="container">
          <h1>COUNTER</h1>
          <span className={state.count < 0 ? "red" : "green"} id="value">
            {state.count}
          </span>
          <div class="button-container">
            <button onClick={decreaseValue} className="btn">
              decrease
            </button>
            <button onClick={resetValue} className="btn">
              reset
            </button>
            <button onClick={increaseValue} className="btn">
              increase
            </button>
          </div>
        </div>
      </div>
       
    </main>
  );
};

export default App;
