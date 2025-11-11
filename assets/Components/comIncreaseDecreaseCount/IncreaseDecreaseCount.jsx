import React, { useState } from 'react';

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div style={{ border: "6px solid lightgreen", padding: "20px", margin: "10px", textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={increase}>Increase count</button>
        <button onClick={decrease}>Decrease count</button>
        <button onClick={reset}>Reset count</button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;