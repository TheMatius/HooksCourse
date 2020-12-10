import React, { useRef } from 'react'

import '../styles.css';

const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                className="form-control"
                placeholder="Nombre"
            />

            <button
                ref={ inputRef }
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen;
