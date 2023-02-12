import { Link } from 'react-router-dom';
import error from '../../assets/pacmanerror.gif';

export const Error = () => {
  return (
    <div className='container'>
      <img src={error} alt={error} />
      <Link to='/'>Volver</Link>
    </div>
  );
};
