import React from 'react';
import { Header } from '../../components/Header/Header';
import { NewProject } from '../../components/NewProject/NewProject';
import { Footer } from '../../components/Footer/Footer';
import { MyAbout } from '../../components/MyAbout/MyAbout';

export const UserActions = () => {
  return (
    <>
      <Header />
      <NewProject />
      <MyAbout />
    </>
  );
};
