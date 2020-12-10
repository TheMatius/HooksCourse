import React, { useEffect, useReducer } from 'react';
//Reducers
import todoReducer from './todoReducer';
//Components
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
//CSS
import '../styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    //useReducer sirve para reemplazar el useState cuando se tiene una lógica más compleja
    //Dispatch permite disparar las acciones
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: { id }
        });
    };

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: { id }
        });
    };

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={ handleAdd } />
                </div>
            </div>
        </div>
    )
}

export default TodoApp;
