import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { back } from '../../../urls';

interface newEmail {
  name: string;
  email: string;
  message: string;
}

type FormElements = HTMLInputElement | HTMLTextAreaElement;

export const Contact = () => {
  const [mail, setMail] = useState<newEmail>({
    name: '',
    email: '',
    message: '',
  });

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  const handleChange = (e: React.ChangeEvent<FormElements>) => {
    const name = e.target.name;
    const value = e.target.value;
    setMail({
      ...mail,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(`${back}/email`, mail);
    Toast.fire({
      icon: 'success',
      title: 'Gracias por enviarme un mensaje, te respoderé en breve!',
    });
  };
  return (
    <div className='container'>
      <h1 className='msg-title text-center'>Enviame un mensaje 👇</h1>
      <form onSubmit={handleSubmit} className='container'>
        <input
          type='text'
          name='name'
          id='full-name'
          placeholder='Tu nombre'
          className='form-control msg-input'
          onChange={handleChange}
        ></input>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Tu correo'
          className='form-control msg-input'
          onChange={handleChange}
        />
        <textarea
          id='message'
          name='message'
          placeholder='Tu mensaje'
          className='form-control msg-input'
          onChange={handleChange}
          rows={10}
        />
        <button type='submit' className='btn btn-dark'>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
