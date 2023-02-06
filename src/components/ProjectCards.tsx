import React from 'react';
import { DocumentData } from '@firebase/firestore';
import './ProjectCards.css';

interface ProjectCardsProps {
  pr: DocumentData;
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ pr }) => {
  return (
    <div className='container card-box'>
      <div className='card'>
        <img
          src={pr.imgs[0]}
          className='card-img-top card-img'
          alt={pr.imgs[0]}
        />
        <div className='card-body'>
          <h5 className='card-title'>{pr.title}</h5>
          <p className='card-text'>{pr.description.slice(0, 240)} (...)</p>
          <a href='#' className='btn btn-primary card-more'>
            Ver proyecto completo
          </a>
        </div>
      </div>
    </div>
  );
};
