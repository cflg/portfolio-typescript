import React from 'react';
import { DocumentData } from '@firebase/firestore';
import './ProjectCards.css';
import { Link } from 'react-router-dom';

interface ProjectCardsProps {
  pr: DocumentData;
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ pr }) => {
  return (
    <div className='container-fluid card-box col-md-6 col-12'>
      <div className='card'>
        <div className='img-card-container'>
          <img
            src={pr.imgs[0]}
            className='card-img-top card-img '
            alt={pr.imgs[0]}
          />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>{pr.title}</h5>
          {pr.tech &&
            pr.tech.map((el: string) => (
              <span className='badge rounded-pill text-bg-warning card-skills'>
                {el}
              </span>
            ))}
          <p className='card-text'>{pr.description.slice(0, 240)} (...)</p>
          <Link to={`/project/${pr.id}`} className='btn btn-primary card-more'>
            Ver proyecto completo
          </Link>
        </div>
      </div>
    </div>
  );
};
