import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { UserActions } from './pages/UserActions';
import { ProjectDetails } from './components/ProjectDetails';
import { PrDetails } from './components/PrDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<UserActions />} />
      <Route path='/details/:id' element={<PrDetails />} />
    </Routes>
  );
}

export default App;
