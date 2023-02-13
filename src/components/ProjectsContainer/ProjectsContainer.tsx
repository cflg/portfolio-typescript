import React, { useEffect, useState } from 'react';
import { ProjectCards } from '../ProjectCards/ProjectCards';
import axios from 'axios';
import { back } from '../../../urls';
import './ProjectsContainer.css';
interface Project {
  id: string;
  title: string;
  deploy: string;
  repo: string;
  video: string;
  description: string;
  imgs: string[];
}

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    axios.get(`${back}/projects`).then((res) => {
      setProjects(res.data);
    });
    axios
      .get(`${back}/projects/2e6adc00-c7a0-4913-a513-ad77a11eaa71`)
      .then((res) => console.log('DETALLES', res));
    console.log(projects);
  }, []);

  return (
    <div className='container-fluid row projects-container'>
      <h1 className='text-center projects-title'>Mis proyectos</h1>

      {projects && projects.map((el) => <ProjectCards pr={el} key={el.id} />)}
    </div>
  );
};
