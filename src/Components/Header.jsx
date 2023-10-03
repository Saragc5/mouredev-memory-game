import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <>
      <h1>Memory game</h1>
      <div className="options-game">
        <span>Time counter</span>
        <span>Move counter</span>
        <span>Remaining counter</span>
      </div>
      <button type="button">Choose level</button>
    </>
  );
}
