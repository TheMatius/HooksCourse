import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ idx, todo, handleToggle, handleDelete }) => {
    const { id, done, desc } = todo;
    return (
        <li className="list-group-item">
            <p 
                className={`${done && 'complete'}`}
                onClick={ () => { handleToggle(id) } }
            >
                { idx }. { desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => { handleDelete(id) } }
            >
                Borrar
            </button>
        </li>
    )
};

TodoListItem.propTypes = {
    idx: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoListItem;
