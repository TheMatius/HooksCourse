import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

import './styles.css';

const MultipleCustomHooks = () => {
    const { counter, add } = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { data, loading } = state;
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBad API</h1>
            <hr />
            { 
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">Loading...</div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ add }
            >
                &gt;&gt;&gt;
            </button>
        </div>
    )
}

export default MultipleCustomHooks;
