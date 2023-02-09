import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../urls';
import axios from 'axios';

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

export const ProjectsDetails = () => {
  const { id } = useParams<Params>();

  const [projectDetails, setProjectDetails] = useState<Project>();

  useEffect(() => {
    axios.get(`${back}/projects/${id}`).then((res) => {
      setProjectDetails(res.data);
    });
  }, [id]);

  return (
    <div className='container-fluid'>
      <div className='container'>
        {projectDetails && (
          <div className='card mb-3'>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className='card-body'>
              <h5 className='card-title'>{projectDetails.title}</h5>
              <p className='card-text'>{projectDetails.description}</p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
