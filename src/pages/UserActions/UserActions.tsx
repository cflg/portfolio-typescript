import React from 'react';
import { Header } from '../../components/Header/Header';
import { NewProject } from '../../components/NewProject/NewProject';
import { MyAbout } from '../../components/MyAbout/MyAbout';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const UserActions = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let userEmail: string | undefined = '';
  if (!isLoading && isAuthenticated && user) {
    userEmail = user.email;
  }
  return (
    <>
      <Header user={userEmail} />
      <Link to='/'>
        <button className='btn btn-outline-secondary btn-details'>
          ↵ Volver
        </button>
      </Link>
      {userEmail && userEmail === 'cflg.dev@gmail.com' && (
        <>
          <NewProject />
          <MyAbout />
        </>
      )}
    </>
  );
};
