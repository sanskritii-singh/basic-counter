
import React, { useState } from "react";

const MyCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter-container">
      <h2 className="counter-heading">Count:</h2>
      <h3 className="counter-value">{count}</h3>

      <div className="counter-input-group">
        <label className="counter-label">Step Size:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="counter-input"
        />
      </div>

      <div className="counter-button-group">
        <button className="counter-button" onClick={() => setCount(count + step)}>Increment</button>
        <button className="counter-button" onClick={() => setCount(count - step)}>Decrement</button>
      </div>

      <button className="counter-reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default MyCounter;

