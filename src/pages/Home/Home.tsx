import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ProjectsContainer } from '../../components/ProjectsContainer/ProjectsContainer';
import './Home.css';
import { About } from '../../components/About/About';
import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let userEmail: string | undefined = '';
  if (!isLoading && isAuthenticated && user) {
    userEmail = user.email;
  }
  useEffect(() => {
    document.title = 'Cristian Lo Giudice ⚡ Web Developer';
  }, []);

  return (
    <div className='container-fluid home'>
      <Header user={userEmail} />
      <About user={userEmail} />
      <ProjectsContainer />
      <Footer />
    </div>
  );
};
