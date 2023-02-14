import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { UserActions } from './pages/UserActions/UserActions';
import { Error } from './components/Error/Error';
import ProjectDetailContainer from './components/ProjectDetailContainer/ProjectDetailContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path='/project/:userId' element={<ProjectDetailContainer />} />
      <Route path='/update/:id' element={<UserActions />} />
      <Route path='/update-about/:aboutId' element={<UserActions />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
