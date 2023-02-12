import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ProjectsContainer } from '../../components/ProjectsContainer/ProjectsContainer';
import './Home.css';
import { About } from '../../components/About/About';

export const Home = () => {
  return (
    <div className='container-fluid home'>
      <Header />
      <About />
      <ProjectsContainer />
      <Footer />
    </div>
  );
};
