import baseURL from "axios"

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"

import "../components/Login.css"

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const post = { email, password };

        try {
            const response = await api.post('/login', post);
            console.log("bem vindo")
        } catch (error) {

            if (email === "") {
                console.error('Erro ao cadastrar:', error.response.data.message)
            }
            else {
                password === "" || password < 8
                console.error('Erro ao cadastrar:', error.response.data.message)
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