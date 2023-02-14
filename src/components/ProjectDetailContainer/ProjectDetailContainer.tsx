import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ProjectsDetails } from '../ProjectsDetails/ProjectsDetails';
import './ProjectDetailContainer.css';
import { useAuth0 } from '@auth0/auth0-react';

const ProjectDetailContainer = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let userEmail: string | undefined = '';
  if (!isLoading && isAuthenticated && user) {
    userEmail = user.email;
  }
  return (
    <div className='container-fluid details-container'>
      <Header user={userEmail} />
      <Link to='/'>
        <button className='btn btn-outline-secondary btn-details'>
          ↵ Volver
        </button>
      </Link>
      <ProjectsDetails />
      <Footer />
    </div>
  );
};

export default ProjectDetailContainer;
