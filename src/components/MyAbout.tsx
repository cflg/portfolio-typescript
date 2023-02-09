import axios from 'axios';
import { useState } from 'react';
import './MyAbout.css';
import { back } from '../../urls';
import Swal from 'sweetalert2';

type FormElements = HTMLInputElement | HTMLTextAreaElement;
interface About {
  me: string;
}

export const MyAbout = () => {
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
    await axios.post(`${back}/about`, about);
    //Dispara un mensaje cuando se envia la info
    Toast.fire({
      icon: 'success',
      title: 'La info sobre vos fué publicada!',
    });
  };

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
            onChange={handleChange}
            rows={10}
          />
        </div>
        <button
          type='submit'
          className='btn btn-outline-success w-50 about-btn'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
