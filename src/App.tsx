import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { UserActions } from './pages/UserActions';
import { ProjectDetails } from './components/ProjectDetails';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path='/details/:id' element={<ProjectDetails />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
