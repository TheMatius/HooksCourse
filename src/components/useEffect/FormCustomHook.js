import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import Message from './Message';

import './SimpleForm.css';

const FormCustomHook = () => {
    //Los hooks no se pueden iniciar de manera condicional, ya que react no los renderiza, es decir, una condición antes de usar el Hook
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambio');
        return () => {
        }
    }, [email]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        console.log('Submit', evt);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Escibre tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@mailito.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >
                Guardar
            </button>
        </form>
    )
}

export default FormCustomHook;
