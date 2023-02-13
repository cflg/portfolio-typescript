import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const New = () => {
  let { userId } = useParams();
  useEffect(() => {
    console.log('useEffect', userId);
  }, [userId]);
  return (
    <div>
      <p>Componente nuevo</p>
    </div>
  );
};
export default New;
