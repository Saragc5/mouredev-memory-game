import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Easy from './Components/Easy';
import Medium from './Components/Medium';
import Advanced from './Components/Advanced';

import './App.scss';

function App() {
  return (
    <main>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="easy" element={<Easy />} />
          <Route path="medium" element={<Medium />} />
          <Route path="advanced" element={<Advanced />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
