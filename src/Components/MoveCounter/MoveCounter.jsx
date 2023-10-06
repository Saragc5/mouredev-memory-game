import React, { useState } from 'react';

export default function MoveCounter() {
  const [count, setCount] = useState(0);

  const handleCountMovements = () => {
    setCount(count + 1);
  };
   
  return (
    <div onChange={handleCountMovements}>{`${count} tiradas`}</div>
  );
}
