import React from 'react';
import { Header } from '../components/Header';
import { NewProject } from '../components/NewProject';
import { Footer } from '../components/Footer';
import { MyAbout } from '../components/MyAbout';

export const UserActions = () => {
  return (
    <>
      <Header />
      <NewProject />
      <MyAbout />
    </>
  );
};
