import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectsContainer } from '../components/ProjectsContainer';
import './Home.css';

export const Home = () => {
  return (
    <div className='container-fluid home'>
      <Header />
      <ProjectsContainer />
      <Footer />
    </div>
  );
};
