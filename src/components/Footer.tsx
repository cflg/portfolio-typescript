import React from 'react';
import './Footer.css';
import { Contact } from './Contact';

export const Footer = () => {
  return (
    <footer className='row footer bg-black p-5'>
      <div className='col-6'>
        <Contact />
      </div>
      <div className='col-6'>
        <p className='text-center'>Cristian Lo Giudice</p>
        <p className='text-center'>redes</p>
      </div>
    </footer>
  );
};
