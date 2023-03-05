import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { FiLogOut, FiLogIn } from 'react-icons/fi';

export const Header = ({ user }) => {
  const { logout, loginWithRedirect } = useAuth0();
  return (
    <header className='p-5 header-container row'>
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
            <Link
              target='_blank'
              to='https://docs.google.com/document/d/1I0rwEfhM6c2npZSwMKRh2FcmJ0xKk8ZroLU6EOm3guk/edit?usp=sharing'
              className='headers-links cv'
            >
              Mi CV
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
            {user && user !== 'cflg.dev@gmail.com' && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
