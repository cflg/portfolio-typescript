import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

export const Contact = () => {
  const [state, handleSubmit] = useForm('xzbqdnlk');

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

  if (state.succeeded) {
    Toast.fire({
      icon: 'success',
      title: 'Gracias por enviarme un mensaje, respoderé a la brevedad!',
    });
  }
  return (
    <div className='container'>
      <h1 className='msg-title text-center'>Enviame un mensaje</h1>
      <form onSubmit={handleSubmit} className='container'>
        <input
          type='text'
          name='name'
          id='full-name'
          placeholder='Tu nombre'
          className='form-control msg-input'
        ></input>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Tu correo'
          className='form-control msg-input'
        />
        <textarea
          id='message'
          name='message'
          placeholder='Tu mensaje'
          className='form-control msg-input'
          rows={10}
        />
        <button
          type='submit'
          disabled={state.submitting}
          className='btn btn-dark'
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
