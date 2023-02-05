import React from 'react';
import { useState } from 'react';
import { db, postProject } from '../API/api';
import './NewProject.css';
import { ImageList } from '@mui/material';
declare global {
  interface Window {
    cloudinary: any;
  }
}

export interface Project {
  title: string;
  deploy: string;
  repo: string;
  video: string;
  description: string;
  imgs: string[];
}

interface CloudinaryResult {
  event: string;
  info: {
    url: string;
  };
}

type FormElements = HTMLInputElement | HTMLTextAreaElement;

export const NewProject = () => {
  const [project, setProject] = useState<Project>({
    title: '',
    deploy: '',
    repo: '',
    video: '',
    description: '',
    imgs: [],
  });

  const handleChange = (e: React.ChangeEvent<FormElements>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(project);
    await postProject(db, project).then((res) => console.log(res));
  };

  const deleteImage = (e: React.ChangeEvent<HTMLImageElement>) => {
    setProject({
      ...project,
      imgs: project.imgs.filter((el) => el !== e.target.value),
    });
  };

  /* ---------- INICIO DE LA FUNCION DE CLOUDINARY ---------- */
  const handleOpenWidget = async () => {
    var myWidget = await window.cloudinary.createUploadWidget(
      {
        cloudName: 'emme3d',
        uploadPreset: 'igsag6pi',
      },
      (error: unknown, result: CloudinaryResult) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setProject({
            ...project,
            imgs: [...project.imgs, result.info.url],
          });
        }
      }
    );
    myWidget.open();
  };
  /* ---------- FIN DE LA FUNCION DE CLOUDINARY ---------- */
  return (
    <form onSubmit={handleSubmit} className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='form-group'>
            <label htmlFor='title' className='form-label'>
              Nombre del proyecto
            </label>
            <input
              type='text'
              className='form-control'
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='deploy' className='form-label labels'>
              Enlace al deploy
            </label>
            <input
              type='text'
              className='form-control'
              name='deploy'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='repo' className='form-label labels'>
              Enlace al repo
            </label>
            <input
              type='text'
              className='form-control'
              name='repo'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='video' className='form-label labels'>
              Enlace al video del proyecto
            </label>
            <input
              type='text'
              className='form-control'
              name='video'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description' className='form-label labels'>
              Describí el proyecto
            </label>
            <textarea
              name='description'
              onChange={handleChange}
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className='col-6 imgs'>
          <div className='form-group'>
            <button
              id='upload_widget'
              className='btn btn-primary btn-img w-100'
              type='button'
              name='imgs'
              onClick={() => handleOpenWidget()}
            >
              Cargar imagenes
            </button>
          </div>
          <div className='row'>
            {project.imgs &&
              project.imgs.map((img) => (
                <div className='div-img'>
                  <img
                    src={img}
                    className='img-loaded m-2'
                    onClick={(e) => deleteImage(e)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-outline-success w-50 '>
        Subir mi proyecto
      </button>
    </form>
  );
};
