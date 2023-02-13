import React from 'react';
import { ProjectsDetails } from '../ProjectsDetails/ProjectsDetails';
import { Header } from '../Header/Header';
import './ProjectDetails.css';
import { Footer } from '../Footer/Footer';

export const Projects = () => {
  return (
    <div className='container-fluid details-container'>
      <Header />
      <a href='/'>
        <button type='button' className='btn btn-outline-secondary btn-back'>
          ↲ Volver
        </button>
      </a>
      <ProjectsDetails />
      <Footer />
    </div>
  );
};
