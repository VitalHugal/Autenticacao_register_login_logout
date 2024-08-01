import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Foto from "../assets/img/pexels-fauxels-3183183.jpg";
import api from "../axios/config";
import "../components/Login.css";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // limpar mensagem de erro
    const clearErrorMessages = () => {
        setErrorMessage('');
    };

    const login = async (e) => {
        e.preventDefault();

        const post = { email, password };

        try {
            const response = await api.post('/login', post);
            const token = response.data.success;
            // Salvar o token no localStorage
            localStorage.setItem('token', token);
            navigate("/home");
        }

        catch (error) {
            const errors = error.response.data.errors;
            setErrorMessage(errors);
        }
    };

    return (
        <div id='container' style={{ backgroundImage: `url(${Foto})`, backgroundSize: "cover" }}>
            <div id='container-main'>
                <div id='container-info' style={{ backgroundImage: `url(${Foto})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                    Entre ou registre-se
                </div>
                <div id='container-form'>
                    <form onSubmit={(e) => login(e)}>
                        <div className="message-error">
                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        <div className='container-items'>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Digite seu e-mail' onChange={(e) => { setEmail(e.target.value); clearErrorMessages(); }} />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name="password" id="password" placeholder='Digite sua senha' onChange={(e) => { setPassword(e.target.value); clearErrorMessages(); }} />
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
    );
}

export default Login;
