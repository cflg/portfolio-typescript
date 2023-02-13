import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../../urls';
import axios from 'axios';

const New = () => {
  const { id } = useParams();

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    axios.get(`${back}/projects/${id}`).then((res) => {
      setProject(res.data);
    });
  });
  return (
    <div>
      <p>Componente nuevo</p>
      <p>{project && project.id}</p>
    </div>
  );
};
export default New;
