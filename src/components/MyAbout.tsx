import axios from 'axios';
import { useState } from 'react';

interface About {
  me: string;
}

export const MyAbout = () => {
  const [about, setAbout] = useState<About>({
    me: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbout({
      ...about,
      me: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await axios.post(
      'https://portfolio-back-production-ca39.up.railway.app/about',
      about
    );
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Escribir sobre mi:
          </label>
          <input
            type='text'
            className='form-control'
            name='me'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};
