import React, { useCallback, useState } from 'react';

//Components
import ShowIncrement from './ShowIncrement';
//CSS
import '../styles.css';

function CallbackHook() {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>CallbackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}

export default CallbackHook;
