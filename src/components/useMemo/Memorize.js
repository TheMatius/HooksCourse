import React, { useState } from 'react';
//Hooks
import { useCounter } from '../../hooks/useCounter';
//Components
import Small from './Small';
//CSS
import '../styles.css';

const Memorize = () => {
    const { counter, add } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h2>Counter : <Small value={ counter } /> </h2>
            <button
                className="btn btn-outline-primary"
                onClick={ add }
            >
                +
            </button>
            <button
                className="btn btn-outline-info ms-3"
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}

export default Memorize;
