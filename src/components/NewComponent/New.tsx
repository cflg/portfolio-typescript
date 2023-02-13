import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../../urls';
import axios from 'axios';

const New = () => {
  const { id } = useParams();

  //const [project, setProject] = useState();

  useEffect(() => {
    //axios.get(`${back}/projects`).then((res) => console.log(res.data));
    console.log(id);
  }, [id]);

  return (
    <div>
      <p>Componente nuevo</p>
    </div>
  );
};
export default New;
