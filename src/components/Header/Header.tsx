import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='container-fluid bg-black p-5'>
      <p className='text-white'>Cristian Lo Giudice</p>
      <Link to='/'>Sobre mi</Link>
      <Link to='/abc'>Mis habilidades</Link>
      <Link to='/new'>Mis proyectos</Link>
      <Link to='/admin'>Admin</Link>
    </header>
  );
};
