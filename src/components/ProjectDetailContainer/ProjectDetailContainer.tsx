import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ProjectsDetails } from '../ProjectsDetails/ProjectsDetails';
import './ProjectDetailContainer.css';

const ProjectDetailContainer = () => {
  return (
    <div className='container-fluid details-container'>
      <Header />
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
