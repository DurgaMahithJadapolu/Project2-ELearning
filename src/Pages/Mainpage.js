import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Homepage';

import Capnolearningpage from "./Capnolearningpage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/capnolearningpage" element={<Capnolearningpage />} />
      </Routes>
    </Router>
  );
}

export default App;
