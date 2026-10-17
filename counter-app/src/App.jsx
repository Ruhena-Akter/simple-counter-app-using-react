import { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};

const reset = () => {
setCount(0);
};

return ( 
<div className="app-container"> 
  <div className="counter-card"> 
    <div className="icon">🔢</div>
    <h1>Counter App</h1>

    <p className="subtitle">
      Keep counting, one step at a time!
    </p>

    <div className="count-display">
      <span className="count-label">
        CURRENT COUNT
      </span>

      <h2 key={count} className="count-number">
        {count}
      </h2>

      <p className="count-message">
        {count === 0
          ? "Ready to start?"
          : count > 0
          ? "Great! Keep going!"
          : "Counting below zero!"}
      </p>
    </div>

    <div className="button-group">
      <button
        className="counter-btn decrement-btn"
        onClick={decrement}
      >
        −
      </button>

      <button
        className="counter-btn reset-btn"
        onClick={reset}
      >
        ↻ Reset
      </button>

      <button
        className="counter-btn increment-btn"
        onClick={increment}
      >
        +
      </button>
    </div>

    <p className="footer-text">
      Made with React
    </p>
  </div>
</div>

);
}

export default App;
