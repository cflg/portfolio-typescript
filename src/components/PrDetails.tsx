import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../urls';
import axios from 'axios';
import './ProjectsDetails.css';

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

export const PrDetails = () => {
  const { id } = useParams<Params>();

  const [projectDetails, setProjectDetails] = useState<Project>();

  useEffect(() => {
    axios.get(`${back}/projects/${id}`).then((res) => {
      setProjectDetails(res.data);
    });
  }, [id]);
  return <div>{projectDetails && projectDetails.title}</div>;
};
