import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='container-fluid bg-black p-5'>
      <p className='text-white'>Cristian Lo Giudice</p>
      <Link to='/'>Sobre mi</Link>
      <Link to='/'>Mis habilidades</Link>
      <Link to='/'>Mis proyectos</Link>
    </header>
  );
};
