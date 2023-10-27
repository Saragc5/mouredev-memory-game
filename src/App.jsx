import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Easy from './Components/Easy/Easy';
import Medium from './Components/Medium/Medium';
import Advanced from './Components/Advanced/Advanced';
import './App.scss';
import AppProvider from './Components/ContextProvider';

function App() {
  return (
    <AppProvider>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="easy" element={<Easy />} />
            <Route path="medium" element={<Medium />} />
            <Route path="advanced" element={<Advanced />} />
          </Route>
        </Routes>
      </main>
    </AppProvider>
  );
}

export default App;
