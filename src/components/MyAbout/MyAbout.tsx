import axios from 'axios';
import { useEffect, useState } from 'react';
import './MyAbout.css';
import { back } from '../../../urls';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

type FormElements = HTMLInputElement | HTMLTextAreaElement;
interface About {
  me: string;
}

export const MyAbout = () => {
  let { aboutId } = useParams();
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

  const [about, setAbout] = useState<About>({
    me: '',
  });
  const handleChange = (e: React.ChangeEvent<FormElements>) => {
    setAbout({
      ...about,
      me: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (aboutId) {
      await axios.put(`${back}/about/${aboutId}`, about);
      //Dispara un mensaje cuando se envia la info
      Toast.fire({
        icon: 'success',
        title: 'La info fué editada!',
      });
    } else {
      await axios.post(`${back}/about`, about);
      //Dispara un mensaje cuando se envia la info
      Toast.fire({
        icon: 'success',
        title: 'La info sobre vos fué publicada!',
      });
    }
  };
  useEffect(() => {
    axios.get(`${back}/about/${aboutId}`).then((res) => setAbout(res.data));
  }, [aboutId]);

  return (
    <div className='container form-about'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Escribir sobre mi:
          </label>
          <textarea
            className='form-control'
            name='me'
            value={about.me}
            onChange={handleChange}
            rows={10}
          />
        </div>
        {aboutId ? (
          <button
            type='submit'
            className='btn btn-outline-success w-50 about-btn'
          >
            Editar
          </button>
        ) : (
          <button
            type='submit'
            className='btn btn-outline-success w-50 about-btn'
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};
