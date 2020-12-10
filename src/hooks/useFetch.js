import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    const IsMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            IsMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (IsMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    }, [url]);

    return state;
}
