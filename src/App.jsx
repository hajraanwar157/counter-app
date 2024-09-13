import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <div className="block1">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => setCounter(counter - 1)}
          >
            _
          </button>
          <p>{counter}</p>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
        <div className="reset">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
