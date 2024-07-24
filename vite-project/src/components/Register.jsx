import React from 'react'

import { Link } from 'react-router-dom'

import "../components/Register.css"

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"
import Button from "../assets/button/button.png";

const Register = () => {
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        console.log('1')
    };

    return (
        <div id='container' style={{
            backgroundImage: `url(${Foto})`,
            backgroundSize: "cover"
        }}>
            <div id='container-main'>
                <div id='container-info' style={{
                    backgroundImage: `url(${Foto})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover"
                }}>
                    Registre-se
                </div>
                <div id='container-form'>
                    <form >
                        <div id='container-back'>
                            <Link to="/"> <img src={Button} alt="botão de voltar" /></Link>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Nome:</label>
                            <input type="text" name="name" id="name" placeholder='Digite seu nome' />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Sobrenome:</label>
                            <input type="text" name="surname" id="surname" placeholder='Digite seu sobrenome' />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="password" id="password" placeholder='Digite sua senha' />
                        </div>
                        <div className='container-items'>
                            <button type="submit" onClick={(e) => handleSubmitRegister(e)} >Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register