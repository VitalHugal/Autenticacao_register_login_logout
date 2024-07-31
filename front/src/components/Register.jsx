import baseURL from "axios"

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import "../components/Register.css"

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"
import Button from "../assets/button/button.png";
import api from "../axios/config";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const createUser = async (e) => {
        e.preventDefault();

        console.log(name, surname, email, password);

        const post = { name, surname, email, password };

        try {
            const response = await api.post('/register', post);
            successMessage(`Cadastrado com sucesso - id:${response.data.success.id}`)
        } catch (error) {

            if (name === '') {
                console.error('Erro ao cadastrar:', error.response.data.message)
            }
            else if (surname === '') {
                console.error('Erro ao cadastrar:', error.response.data.message)
            }
            else if (email === "") {
                console.error('Erro ao cadastrar:', error.response.data.message)
            }
            else {
                password === "" || password < 8
                console.error('Erro ao cadastrar:', error.response.data.message)
            }
        }

        if (createUser === true) {


        }
    };

    // const [name, setName] = useState([])

    // const getName = async () => {

    //     try {
    //         const response = await baseURL.get("/register")

    //         const data = response;

    //         console.log(data);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {

    //     getName();

    // }, [])

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
                    <form onSubmit={(e) => createUser(e)}>
                        <div className="message hide">
                            {successMessage && <p>{successMessage}</p>}
                        </div>
                        <div id='container-back'>
                            <Link to="/"> <img src={Button} alt="botão de voltar" /></Link>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Nome:</label>
                            <input type="text" name="name" id="name" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Sobrenome:</label>
                            <input type="text" name="surname" id="surname" placeholder='Digite seu sobrenome' onChange={(e) => setSurname(e.target.value)} />
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
                            <button type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register