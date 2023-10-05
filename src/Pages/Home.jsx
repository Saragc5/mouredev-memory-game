import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const navigate = useNavigate();

  const handleChooseLevel = () => {
    navigate(`/${selectedLevel}`);
  };
  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  return (
    <div>
      <h1>Choose level</h1>
      <select name="level" required={+true} onChange={handleLevelChange}>
        <option value="">Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="advanced">Advanced</option>
      </select>
      <button type="button" onClick={handleChooseLevel}>
        Go!
      </button>
    </div>
  );
}
