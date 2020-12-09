import { useState } from "react";

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const add = () => {
        setState( state + 1 );
    }

    const substract = () => {
        setState( state - 1 );
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        add,
        substract,
        reset
    }
}
