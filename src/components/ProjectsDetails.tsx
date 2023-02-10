import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../urls';
import axios from 'axios';
import './ProjectsDetails.css';
import { GrGithub } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';

interface Params {
  [key: string]: string;
}

export interface Project {
  title: string;
  deploy: string;
  repo: string;
  video: string;
  description: string;
  imgs: string[];
}

interface Props {
  className: string;
  src: string;
  frameborder: string;
  allow: string;
  allowfullscreen: boolean;
}

export const ProjectsDetails: React.FC<Props> = ({
  className,
  src,
  frameborder,
  allow,
  allowfullscreen,
}) => {
  const { id } = useParams<Params>();

  const [projectDetails, setProjectDetails] = useState<Project>();

  useEffect(() => {
    axios.get(`${back}/projects/${id}`).then((res) => {
      setProjectDetails(res.data);
    });
  }, [id]);
  console.log(projectDetails);
  return (
    <div className='container-fluid '>
      <div className='container details-container'>
        {projectDetails && (
          <div className='card mb-3'>
            <div id='carouselExampleIndicators' className='carousel slide'>
              <div className='carousel-indicators'>
                {projectDetails.imgs.length &&
                  projectDetails.imgs.map((img, index) => (
                    <button
                      type='button'
                      data-bs-target='#carouselExampleIndicators'
                      data-bs-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                      aria-current={index === 0 ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
              </div>
              <div className='carousel-inner '>
                {projectDetails.imgs.length &&
                  projectDetails.imgs.map((img, index) => (
                    <div
                      className={`carousel-item img-detail img-detail-container ${
                        index === 0 ? 'active' : ''
                      }`}
                    >
                      <img src={img} className='d-block w-100' alt={img} />
                    </div>
                  ))}
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon control-btn'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon control-btn'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
            <div className='video-detail-container'>
              <iframe
                className='project-video'
                src={projectDetails.video}
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture'
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className='card-body'>
              <h5 className='card-title'>{projectDetails.title}</h5>
              <div className='container links-container'>
                <div className='alert alert-info links-details' role='alert'>
                  <a href={projectDetails.deploy}>
                    <TbWorld size={30} /> Enlace al deploy
                  </a>
                </div>
                <div className='alert alert-info links-details' role='alert'>
                  <a href={projectDetails.repo}>
                    <GrGithub size={30} /> Enlace al repo
                  </a>
                </div>
              </div>
              {projectDetails.description.split('\n').map((line, index) => {
                return (
                  <p className='card-text' key={index}>
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className='space'></div>
    </div>
  );
};
