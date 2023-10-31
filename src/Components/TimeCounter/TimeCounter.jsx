import React, { useState } from 'react';

export default function TimeCounter() {
  const [count, setCount] = useState(60);

  const handleCountTime = () => {
    setCount(count - 1);
  };
  setTimeout(handleCountTime, 60000);
   
  return (
    <div style={{ backgroundColor: "red" }} onChange={handleCountTime}>{`${count} segs`}</div>
  );
}
