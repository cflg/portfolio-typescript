import React from 'react';
import './Footer.css';
import { Contact } from '../Contact/Contact';
import { Social } from '../Social/Social';

export const Footer = () => {
  return (
    <footer className='row footer bg-black'>
      <div className='col-6'>
        <Contact />
      </div>
      <div className='col-6'>
        <Social />
      </div>
    </footer>
  );
};
