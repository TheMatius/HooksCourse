import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../styles.css';

const Layout = () => {
    const { counter, add } = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { data } = state;
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote">
                <p ref={ pTag }>{ quote }</p>
            </blockquote>

            <button 
                className="btn btn-primary"
                onClick={ add }
            >
                &gt;&gt;&gt;
            </button>
        </div>
    )
}

export default Layout;
