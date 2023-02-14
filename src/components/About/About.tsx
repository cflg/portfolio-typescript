import { useEffect, useState } from 'react';
import { back } from '../../../urls';
import axios from 'axios';
import Swal from 'sweetalert2';
import './About.css';

interface AboutData {
  id: string;
  me: string;
}

export const About = () => {
  /* CONFIGURACION DE SWEETALERT2 */

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const [about, setAbout] = useState<AboutData>();

  useEffect(() => {
    axios.get(`${back}/about`).then((res) => {
      setAbout(res.data);
    });
  }, []);

  const handleDelete = async (id: string) => {
    await axios.delete(`${back}/about/${id}`);
    //Dispara un mensaje cuando se envia la info
    Toast.fire({
      icon: 'success',
      title: 'La info fué borrada!',
    });
  };
  console.log(about);
  return (
    <div className='container about-container' id='about'>
      <h1 className='about-title'>Sobre mi</h1>
      {about &&
        Array.isArray(about) &&
        about.map((el) => (
          <div>
            <p className='text-about'>{el.me}</p>
            <button
              type='submit'
              className='btn btn-outline-danger btn-delete-about'
              onClick={() => handleDelete(el.id)}
            >
              Borrar
            </button>
          </div>
        ))}
    </div>
  );
};
