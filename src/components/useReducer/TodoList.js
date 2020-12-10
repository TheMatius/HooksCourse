import React from 'react';
import PropTypes from 'prop-types';
//Components
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, idx) => (
                    <TodoListItem  
                        key={ todo.id }
                        idx={ idx + 1 }
                        todo={ todo }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />
                ))
            }
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoList;
