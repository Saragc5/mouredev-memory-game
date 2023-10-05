import React from 'react';
import './Header.scss';

export default function Header() {
  // const chooseLevel = () => {

  // };
  return (
    <>
      <h1>Memory game</h1>
      <div className="options-game">
        <span id="time-counter" name="time-counter" className="counter">
          Time counter
        </span>

        <span className="counter">Move counter</span>
        <span className="counter">Remaining counter</span>
      </div>
      <button className="btn-level" type="button">
        Choose level
      </button>
    </>
  );
}
