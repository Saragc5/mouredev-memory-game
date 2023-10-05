import React, { useState } from 'react';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleChangeLevel = () => {
    if (!clicked) {
      setClicked(true);
      navigate('/');
    }
  };
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
      {isHome ? (
        <button className="btn-level-hidden" type="button">
          Choose level
        </button>
      ) : (
        <button className="btn-level" type="button" onClick={handleChangeLevel}>
          Choose level
        </button>
      )}

      <hr />
    </>
  );
}
