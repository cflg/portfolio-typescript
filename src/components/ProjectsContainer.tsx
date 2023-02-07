import React, { useEffect, useState } from 'react';
import { ProjectCards } from './ProjectCards';
import axios from 'axios';

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
    axios
      .get('https://portfolio-back-production-ca39.up.railway.app/projects')
      .then((res) => {
        setProjects(res.data);
      });
    console.log(projects);
  }, []);

  return (
    <div className='container col'>
      <h1 className='text-center '>Mis proyectos</h1>
      <div className='col-12'>
        {projects && projects.map((el) => <ProjectCards pr={el} key={el.id} />)}
      </div>
    </div>
  );
};
