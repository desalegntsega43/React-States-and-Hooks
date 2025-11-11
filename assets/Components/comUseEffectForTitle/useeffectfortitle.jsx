import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Component is mounted.");
  }, []);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div style={{ border: "6px solid lightgreen", padding: "20px", margin: "10px", marginTop: '50px' }}>
      <h2><b>Use Effect For Title</b></h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h3>{count}</h3>
    </div>
  );
}

export default UseEffectForTitle;
