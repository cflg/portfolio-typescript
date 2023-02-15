import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { FiLogOut, FiLogIn } from 'react-icons/fi';

export const Header = ({ user }) => {
  const { logout, loginWithRedirect } = useAuth0();
  return (
    <header className='container-fluid p-5 header-container row'>
      <div className='col'>
        <div>
          <p className='myname'>Cristian Lo Giudice</p>
        </div>
        <div className='links-containers'>
          <div>
            <Link to='/#about' className='headers-links'>
              Sobre mi
            </Link>
            <Link to='/#myprojects' className='headers-links'>
              Mis proyectos
            </Link>
          </div>

          <div>
            {user ? (
              ''
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className='admin-links'
              >
                <FiLogIn />
              </button>
            )}
            {user && user === 'cflg.dev@gmail.com' && (
              <>
                <Link to='/admin' className='admin-links admin'>
                  Admin
                </Link>
                <button
                  className='admin-links'
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <FiLogOut />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
