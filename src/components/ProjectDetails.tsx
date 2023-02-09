import React from 'react';
import { ProjectsDetails } from './ProjectsDetails';
import { Header } from './Header';
import './ProjectDetails.css';
import { Footer } from './Footer';

export const ProjectDetails = () => {
  return (
    <div className='container-fluid details-container'>
      <Header />
      <h1>detalles</h1>
      <ProjectsDetails />
      <Footer />
    </div>
  );
};
