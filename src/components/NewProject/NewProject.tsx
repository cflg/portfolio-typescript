import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './NewProject.css';
import axios from 'axios';
import { back } from '../../../urls';

/* INTERFACES Y ELEMENTOS DE TYPESCRIPT */

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

/* INICIO DEL COMPONENTE */

export const NewProject = () => {
  /* ESTADO PARA ALMACENAR DATOS DEL FORMULARIO */
  const [project, setProject] = useState<Project>({
    title: '',
    deploy: '',
    repo: '',
    video: '',
    description: '',
    imgs: [],
  });

  /* CONFIGURACION DE SWEETALERT2 */

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const handleChange = (e: React.ChangeEvent<FormElements>) => {
    let value = e.target.value;

    // Reemplaza la url de youtube
    if (e.target.name === 'video') {
      value = value.replace('watch?v=', 'embed/');
    }

    setProject({
      ...project,
      [e.target.name]: value,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const value = e.currentTarget.value + '\n';
      setProject({
        ...project,
        description: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //Esta linea es para que no se recargue la pagina
    e.preventDefault();
    //funcion para agregar proyectos a la db
    await axios.post(`${back}/projects`, project);
    //Este set sirve para limpiar los inputs cuando se postea un proyecto
    setProject({
      title: '',
      deploy: '',
      repo: '',
      video: '',
      description: '',
      imgs: [],
    });
    //Dispara un mensaje cuando se envia la info
    Toast.fire({
      icon: 'success',
      title: 'Proyecto publicado!',
    });
  };
  //Esta funcion sirve para eliminar imagenes cuando se clickea sobre ellas
  const deleteImage = (event: React.MouseEvent<HTMLImageElement>) => {
    //Estas const las debo incluir para que TS tome los tipos correctamente
    const target = event.target as HTMLImageElement;
    const imageSrc = target.src;
    setProject({
      ...project,
      imgs: project.imgs.filter((el) => el !== imageSrc),
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
      <div className='row elm-cont'>
        <div className='col-6'>
          <div className='form-group'>
            <label htmlFor='title' className='form-label'>
              Nombre del proyecto
            </label>
            <input
              type='text'
              className='form-control'
              name='title'
              value={project.title}
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
              value={project.deploy}
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
              value={project.repo}
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
              value={project.video}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='description' className='form-label labels'>
              Describí el proyecto
            </label>
            <textarea
              name='description'
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              className='form-control'
              value={project.description}
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
            <p className='img-msg'>
              Para eliminar una imágen clickea sobre ella
            </p>
          </div>
          <div className='row img-cont'>
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