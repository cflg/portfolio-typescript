import { Link } from 'react-router-dom';
import error from '../../assets/error.png';
import './Error.css';

export const Error = () => {
  return (
    <div className='container error-container'>
      <img src={error} alt={error} className='error-img' />
      <p className='error-text'>Ooops... parece que esta página no existe.</p>
      <Link to='/' className='go-back'>
        Volver
      </Link>
    </div>
  );
};
