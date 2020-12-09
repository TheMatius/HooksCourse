import React, { useEffect, useState } from 'react';

import Message from './Message';

import './SimpleForm.css';

const SimpleForm = () => {
    //Los hooks no se pueden iniciar de manera condicional, ya que react no los renderiza, es decir, una condición antes de usar el Hook
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    //React recomienda crear un useEffect por cada escucha de cambios
    //Para que se dispare solo una vez se agrega un [] como segundo parametro a la funcion useEffect
    useEffect(() => {
        // console.log('hey');
    }, []);

    //useEffect va a estar pendiente de los cambios del formState
    useEffect(() => {
        // console.log('formState Cambió');
    }, [formState]);

    //useEffect esta escuchando solo los cambios del email
    useEffect(() => {
        // console.log('Email Cambió');
    }, [email]);
    
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    return (
        <>
            <h1>useEffect</h1>
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

            { (name == 123) && <Message /> }
        </>
    )
}

export default SimpleForm;
