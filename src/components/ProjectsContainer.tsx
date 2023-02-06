import React, { useEffect, useState } from 'react';
import { getProjects, db } from '../API/api';
import { DocumentData } from 'firebase/firestore';
import { ProjectCards } from './ProjectCards';

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState<DocumentData[]>([]);

  useEffect(() => {
    getProjects(db).then((data: DocumentData[] | undefined) => {
      if (data) {
        setProjects(data);
      }
    });
  }, []);

  return (
    <div className='container col'>
      <h1 className='text-center '>Mis proyectos</h1>
      <div className='col-12'>
        {projects &&
          projects.map((el) => <ProjectCards pr={el} key={el.title} />)}
      </div>
    </div>
  );
};
