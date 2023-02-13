import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { UserActions } from './pages/UserActions/UserActions';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { Error } from './components/Error/Error';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path='/projects/:id' element={<ProjectDetails />} />
      <Route path='/error' element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
