import React from 'react';
import { useAppContext } from '../ContextProvider';

export default function MoveCounter() {
  const { count, handleCountMovements } = useAppContext();
   
  return (
    <div onChange={handleCountMovements}>{`${count} tiradas`}</div>
  );
}
