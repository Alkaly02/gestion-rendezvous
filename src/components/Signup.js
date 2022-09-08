import React from 'react'
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, PasswordInput } from '@mantine/core';
import logo from '../assets/img/illustration.svg'

const Signup = () => {
    const form = useForm({
        initialValues: { firstname: '', lastname: "", phone: '', email: '', password: "", confirmPassword: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            firstname: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
            lastname: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
            phone: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
            password: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
            confirmPassword: (value) => (value === '' ? 'Les champs ne doivent pas etre vides' : null),
        },
    });

    const handleSubmit = form.onSubmit(values => { 
        const {firstname, lastname, phone, email, password, confirmPassword} = values
        
        if(password.length < 6) return form.setErrors({password: "Mot de passe court, au moins 6 caractères"})

        if(password !== confirmPassword) return form.setErrors({ confirmPassword: 'Les mots de passe doivent correspondre'})       
            
        // console.log(values);
    })

    return (
        <div className='form-signup--container'>
            <div className='form-left'>
                <h1>Prenez votre rendez-vous</h1>
                <img src={logo} alt="Appointement" />
            </div>
            <div className='form-right'>
                <h1>Insription</h1>
                <p>Créer votre compte</p>
                <span>Vous avez déjà un compte ? Connectez-vous</span>
                <form onSubmit={handleSubmit}>
                    <TextInput label="Prénom" placeholder="Prénom" {...form.getInputProps('firstname')} />
                    <TextInput mt="md" label="Nom" placeholder="Nom" {...form.getInputProps('lastname')} />
                    <TextInput mt="md" label="Téléphone" placeholder="Téléphone" {...form.getInputProps('phone')} />
                    <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                    <PasswordInput
                        mt="md"
                        placeholder="Mot de passe"
                        label="Mot de passe"
                        value=""
                        description="Saisissez au moins 6 caracteres"
                        // withAsterisk
                        {...form.getInputProps('password')}
                    />
                    <PasswordInput
                        mt="md"
                        placeholder="Confirmer mot de passe"
                        label="Confirmer mot de passe"
                        value=""
                        description="Les mots de passes doivent correspondre"
                        // withAsterisk
                        {...form.getInputProps('confirmPassword')}
                    />
                    <button style={{ width: "100%", marginTop: '1.5rem' }} className='btn-submit' type="submit">Inscrivez-vous</button>
                </form>
            </div>
        </div>
    );
}

export default Signup