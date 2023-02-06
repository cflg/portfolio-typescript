import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  Firestore,
} from 'firebase/firestore';
//Este es un objeto de configuración para realizar peticiones a la base de datos
import { Project } from '../components/NewProject';

const firebaseConfig = {
  apiKey: 'AIzaSyB3yz3GILUlSzI_FLQ9Q4_hPPJr2cvgPgg',
  authDomain: 'portfolio-5a590.firebaseapp.com',
  projectId: 'portfolio-5a590',
  storageBucket: 'portfolio-5a590.appspot.com',
  messagingSenderId: '200100896472',
  appId: '1:200100896472:web:1130f67b870d20fe1741ad',
};
//Inicializo firebase con los parámetros de configuración
const app = initializeApp(firebaseConfig);
//Inicializo Cloud Firestore y obtengo una referencia al servicio
export const db = getFirestore(app);
//Con esta función envío la info. del form. a la base de datos

export const postProject = async (db: Firestore, project: Project) => {
  try {
    const docRef = await addDoc(collection(db, 'project'), {
      title: project.title,
      deploy: project.deploy,
      repo: project.repo,
      video: project.video,
      description: project.description,
      imgs: project.imgs,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
//Obtengo todas las respuestas de la base de datos que antes fueron agregadas con el formulario
export const getProjects = async (db: Firestore) => {
  try {
    const allResponses = await getDocs(collection(db, 'project'));
    return allResponses.docs.map((e) => e.data());
  } catch (error) {
    console.log(error);
  }
};
