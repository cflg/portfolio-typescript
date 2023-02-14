import React from 'react';
import { Header } from '../../components/Header/Header';
import { NewProject } from '../../components/NewProject/NewProject';
import { MyAbout } from '../../components/MyAbout/MyAbout';
import { Link } from 'react-router-dom';

export const UserActions = () => {
  return (
    <>
      <Header />
      <Link to='/'>
        <button className='btn btn-outline-secondary btn-details'>
          ↵ Volver
        </button>
      </Link>
      <NewProject />
      <MyAbout />
    </>
  );
};
