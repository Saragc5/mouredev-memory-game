import React, { useState } from 'react';

export default function RemainingCounter() {
  const [count, setCount] = useState(10);

  const handleCountMovements = () => {
    setCount(count + 1);
  };
   
  return (
    <div onChange={handleCountMovements}>{`Te quedan ${count} pares restantes`}</div>
  );
}
