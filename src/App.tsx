import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { UserActions } from './pages/UserActions/UserActions';
import { Error } from './components/Error/Error';
import { Projects } from './components/Projects/Projects';
import New from './components/NewComponent/New';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/new/:id' element={<New />} />
      <Route path='/error' element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
