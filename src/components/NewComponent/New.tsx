import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../../urls';
import axios from 'axios';

const New = () => {
  const { id } = useParams();

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    axios.get(`${back}/projects`).then((res) => console.log(res.data));
  }, [id]);

  return (
    <div>
      <p>Componente nuevo</p>
    </div>
  );
};
export default New;
