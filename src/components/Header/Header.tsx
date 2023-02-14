import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Header = ({ user }) => {
  const { logout } = useAuth0();
  return (
    <header className='container-fluid bg-black p-5'>
      <p className='text-white'>Cristian Lo Giudice</p>
      <Link to='#about'>Sobre mi</Link>
      <Link to='/abc'>Mis habilidades</Link>
      <Link to='#myprojects'>Mis proyectos</Link>
      <Link to='/login'>Iniciar sesión</Link>
      {user && user === 'cflg.dev@gmail.com' && (
        <>
          <Link to='/admin'>Admin</Link>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Cerrar sesión
          </button>
        </>
      )}
    </header>
  );
};
