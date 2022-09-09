import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput } from '@mantine/core';
import logo from '../assets/img/illustration.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleButton from './GoogleButton';

const Login = () => {
    const navigate = useNavigate()
    const form = useForm({
        initialValues: {  email: '', password: "" },

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
            password: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
        },
    });

    const url = 'http://localhost:5001/api/login';

    const handleSubmit = form.onSubmit( async (values) => { 
        const { email, password} = values
        const data = { email, password}

        try{
            console.log(typeof phone);
            const createdUser = await axios.post(url, data)
            navigate('/admin')
            console.log(createdUser.data, ' logged');
        }
        catch(err){
            form.setErrors({email: err.response.data.error, password: err.response.data.error})
        }           
        // console.log(values);
    })

    return (
        <div className='form-signup--container'>
            <div className='form-left'>
                <h1>Prenez votre rendez-vous</h1>
                <img src={logo} alt="Appointement" />
            </div>
            <div className='form-right'>
                <h1>Connexion</h1>
                <p>Connectez-vous à votre compte</p>
                <span>Vous n'avez pas de compte ? <Link to="/signup">Inscrivez-vous</Link></span>
                <form onSubmit={handleSubmit}>
                    <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                    <PasswordInput
                        mt="md"
                        placeholder="Mot de passe"
                        label="Mot de passe"
                        value=""
                        // withAsterisk
                        {...form.getInputProps('password')}
                    />
                    <button style={{ width: "100%", marginTop: '1.5rem' }} className='btn-submit' type="submit">Connexion</button>
                    <GoogleButton>Connexion avec google</GoogleButton>
                </form>
            </div>
        </div>
    );
}

export default Login