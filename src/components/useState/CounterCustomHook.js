import React from 'react';

import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

const CounterCustomHook = () => {

    const { state, add, substract,  reset } = useCounter();

    return (
        <>
            <h1>Counter Hook: { state }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ add }
            >+1</button>
            <button 
                className="btn btn-primary"
                onClick={ reset }
            >Reiniciar</button>
            <button 
                className="btn btn-primary"
                onClick={ () => substract() } //Queda referenciada la función sin llamarla y es especial para funciones con parametros.
            >-1</button>
        </>
    )
}

export default CounterCustomHook;
