import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import api from '../axios/config';

import "./Home.css"

const Home = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await api.post('/logout');
      console.log("Logout successful");
      localStorage.removeItem('token');
      navigate('/');

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/home');
        setData(response.data);
        console.log("cheguei")
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao buscar dados.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header id='title'>
        <nav>
          <ul>
            <li id='logout' onClick={logout}>Sair</li>
          </ul>
        </nav>
      </header>
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
    </div>
  );
};

export default Home