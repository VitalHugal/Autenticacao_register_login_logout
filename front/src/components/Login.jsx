import baseURL from "axios"

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import api from "../axios/config";

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"

import "../components/Login.css"

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const post = { email, password };

        try {
            const response = await api.post('/login', post);
            const token = response.data.success
            console.log(token)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors;
                console.error('Erro ao entrar:', errors);
                setErrorMessage(errors);
            } else {
                console.error('Erro desconhecido:', error);
            }
        }
    };

    return (
        <div id='container'
            style={{
                backgroundImage: `url(${Foto})`,
                backgroundSize: "cover"
            }}
        >
            <div id='container-main'>
                <div id='container-info' style={{
                    backgroundImage: `url(${Foto})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover"
                }}>
                    Entre ou registre-se
                </div>
                <div id='container-form'>
                    <form onSubmit={(e) => login(e)}>
                        <div className="message-error">
                            <p>ihjsdfi</p>
                            {errorMessage.email && <p>{errorMessage.email.join(', ')}</p>}
                            {errorMessage.password && <p>{errorMessage.password.join(', ')}</p>}
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="password" id="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='container-items'>
                            <button type="submit">Entrar</button>
                        </div>
                        <div className='container-items'>
                            <Link to="/registre-se">Não tem conta ainda ?<span>Registre-se</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login