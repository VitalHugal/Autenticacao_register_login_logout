import React from 'react'

import { Link } from 'react-router-dom'

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"

import "../components/Login.css"

const Login = () => {

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log("2")
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
                    <form >
                        <div className='container-items'>
                            <label htmlFor="">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="password" id="password" placeholder='Digite sua senha' />
                        </div>
                        <div className='container-items'>
                            <button type="submit" onClick={(e) => handleSubmitLogin(e)} >Entrar</button>
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