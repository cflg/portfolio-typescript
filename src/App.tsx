import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { UserActions } from './pages/UserActions';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<UserActions />} />
    </Routes>
  );
}

export default App;
