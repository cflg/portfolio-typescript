import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { UserActions } from './pages/UserActions/UserActions';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { Error } from './components/Error/Error';
import { ProjectsDetails } from './components/ProjectsDetails/ProjectsDetails';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path='/details/:id' element={<ProjectsDetails />} />
      <Route path='/error' element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
