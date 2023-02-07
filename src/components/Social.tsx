import React from 'react';
import './Social.css';
import { GrLinkedin, GrGithub, GrTwitter } from 'react-icons/gr';

export const Social = (): JSX.Element => {
  return (
    <div className='container col'>
      <div className='col-12'>
        <h1 className='social-title text-center'>Mis redes</h1>
      </div>

      <div className='container row'>
        <div className='col-4 footer-icons'>
          <a href='https://www.linkedin.com/in/cristian-lg/' target='_blank'>
            <GrLinkedin size={80} className='linkedin' />
          </a>
        </div>
        <div className='col-4 footer-icons'>
          <a href='https://github.com/cflg' className='col-4' target='_blank'>
            <GrGithub size={80} className='linkedin' />
          </a>
        </div>
        <div className='col-4 footer-icons'>
          <a href='https://twitter.com/CFLG_' className='col-4' target='_blank'>
            <GrTwitter size={80} className='linkedin' />
          </a>
        </div>
      </div>
    </div>
  );
};
