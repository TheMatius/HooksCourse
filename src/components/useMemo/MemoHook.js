import React, { useMemo, useState } from 'react';

import { highProcess } from '../../helpers/HighProcess';
//Hooks
import { useCounter } from '../../hooks/useCounter';
//CSS
import '../styles.css';

const MemoHook = () => {
    const { counter, add } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoHighProcess = useMemo(() => highProcess(counter), 
        [counter]); //Dependencias como segundo argumento

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter : <small>{ counter }</small></h3>
            <hr />

            <p> { memoHighProcess } </p>

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

export default MemoHook;
