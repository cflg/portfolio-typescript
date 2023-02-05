import React from 'react';
import { useState } from 'react';

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface Project {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(project);
    //postProject(project)
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
    <form onSubmit={handleSubmit}>
      <h1>Subí tu proyecto!</h1>
      <div className='form-group'>
        <label htmlFor='title'>Nombre del proyecto</label>
        <input
          type='text'
          className='form-control'
          name='title'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='deploy'>Enlace al deploy</label>
        <input
          type='text'
          className='form-control'
          name='deploy'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='repo'>Enlace al repo</label>
        <input
          type='text'
          className='form-control'
          name='repo'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='video'>Enlace al video del proyecto</label>
        <input
          type='text'
          className='form-control'
          name='video'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <button
          id='upload_widget'
          className='btn btn-primary'
          type='button'
          name='imgs'
          onClick={() => handleOpenWidget()}
        >
          Cargar imagenes
        </button>
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Describí el proyecto</label>
        <textarea
          name='description'
          onChange={handleChange}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows={10}
        ></textarea>
      </div>
      <button type='submit' className='btn btn-outline-success'>
        Success
      </button>
    </form>
  );
};
