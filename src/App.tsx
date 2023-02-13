import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import './App.css';
import { UserActions } from './pages/UserActions/UserActions';
import { Error } from './components/Error/Error';
import New from './components/NewComponent/New';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<UserActions />} />
      <Route path=':userId' element={<New />} />
      <Route path='/abc' element={<New />} />
      <Route path='/error' element={<Error />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
