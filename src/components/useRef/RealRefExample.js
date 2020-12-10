import React, { useState } from 'react';

import MultipleCustomHooks from '../MultipleCustomHooks';

import '../styles.css';

const RealRefExample = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealRefExample</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => setShow(!show) }
            >
                Show/Hide
            </button>
        </div>
    )
}

export default RealRefExample;
