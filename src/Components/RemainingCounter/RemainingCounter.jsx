import React, { useState } from 'react';

export default function RemainingCounter() {
  const [count, setCount] = useState(10);

  const handleCountMovementsLeft = () => {
    setCount(count + 1);
  };
   
  return (
    <div onChange={handleCountMovementsLeft}>{`Te quedan ${count} pares restantes`}</div>
  );
}
