import React, { useState } from 'react';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import TimeCounter from '../TimeCounter/TimeCounter';
import MoveCounter from '../MoveCounter/MoveCounter';
import RemainingCounter from '../RemainingCounter/RemainingCounter';

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleChangeLevel = () => {
    if (clicked) {
      setClicked(true);
      navigate('/');
    } 
  };
  return (
    <>
      <h1>Memory game</h1>
      {!isHome ? (
        <div className="options-game">
          <span id="time-counter" name="time-counter" className="counter">
            <TimeCounter />
          </span>
          <span className="counter">
            <MoveCounter />
          </span>
          <span className="counter">
            <RemainingCounter />
          </span>
        </div>
      ) : (
        ""
      )}

      {isHome ? (
        <button className="btn-level-hidden" type="button">
          Choose level
        </button>
      ) : (
        <button className="btn-level" type="button" onClick={handleChangeLevel}>
          Change level
        </button>
      )}

      <hr />
    </>
  );
}
