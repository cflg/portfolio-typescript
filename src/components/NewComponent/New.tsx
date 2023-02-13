import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { back } from '../../../urls';
import axios from 'axios';

const New = () => {
  let { id } = useParams();

  console.log(id);
  return (
    <div>
      <p>Componente nuevo</p>
    </div>
  );
};
export default New;
