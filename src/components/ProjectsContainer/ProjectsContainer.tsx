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
  }, []);

  return (
    <div className='container-fluid row projects-container'>
      <h1 className='text-center projects-title'>Mis proyectos</h1>

      {projects && projects.map((el) => <ProjectCards pr={el} key={el.id} />)}
    </div>
  );
};
