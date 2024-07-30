import baseURL from "axios"

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import "../components/Register.css"

import Foto from "../assets/img/pexels-fauxels-3183183.jpg"
import Button from "../assets/button/button.png";

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const createUser = async(e) => {
        e.preventDefault()

        const post = {name, surname, email, password}

        try {
            const response = await baseURL.post('/register',);
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }

        navigate("/")
    }

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
                        <div id='container-back'>
                            <Link to="/"> <img src={Button} alt="botão de voltar" /></Link>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Nome:</label>
                            <input type="text" name="name" id="name" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Sobrenome:</label>
                            <input type="text" name="surname" id="surname" placeholder='Digite seu sobrenome' onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='container-items'>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="password" id="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
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