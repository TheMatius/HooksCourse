// Recordemos la estructura del reducer, contiene el state y el action como parametros, en este caso está destructurado
const todoReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'add':
            return [...state, payload];
        case 'delete':
            return state.filter(({ id }) => id !== payload.id);
        case 'toggle':
            return state.map(todo => (todo.id === payload.id) ? { ...todo, done: !todo.done } : todo);
        case 'toggle-old':
            return state.map(todo => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
};

export default todoReducer;