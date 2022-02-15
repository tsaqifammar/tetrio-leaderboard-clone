import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';
import './App.css';
import PlayerProfile from './pages/PlayerProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/p/:username" element={<PlayerProfile />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
