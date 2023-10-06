import React, { useState } from 'react';

export default function TimeCounter() {
  const [count, setCount] = useState(60);

  const handleCountMovements = () => {
    setCount(count - 1);
  };
   
  return (
    <div onChange={handleCountMovements}>{`${count} segs`}</div>
  );
}
