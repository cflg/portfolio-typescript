import { useEffect } from 'react';

const New = () => {
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div>
      <p>Componente nuevo</p>
    </div>
  );
};
export default New;
