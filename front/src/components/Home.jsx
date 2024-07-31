import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import api from '../axios/config';

import "./Home.css"

const Home = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/home');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao buscar dados.');
      }
    };

    fetchData();
  }, []);


  return (
    <div id='home'>
      {error && <p className="error">{error}</p>}
      {data ? (
        <div>
          <h1>Bem-vindo !</h1>
          {/* Renderizar os dados obtidos */}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home