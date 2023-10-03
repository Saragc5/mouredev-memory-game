import React from 'react';
import Easy from './Components/Easy';

export default function App() {
  return (
    <main>
      <header>
        <div>Time counter</div>
        <div>Move counter</div>
        <div>Remaining counter</div>
        <button type="button">Choose level</button>
      </header>
      <Easy />
    </main>
  );
}
