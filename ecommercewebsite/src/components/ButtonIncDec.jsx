import { useState } from "react";

function ButtonIncDec() {
  const [count, setCount] = useState(1);

  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrease() {
    setCount((prevCount) => Math.max(prevCount - 1, 1)); // Ensure the value doesn't go below 1
  }

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleDecrease}
        >
          -
        </button>
        <button type="button" className="btn btn-outline-secondary">
          {count}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </>
  );
}

export default ButtonIncDec;
