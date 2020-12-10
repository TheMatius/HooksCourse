import React from 'react';
import PropTypes from 'prop-types';
//Hooks
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAdd }) => {
    const [{ description }, handleInputChange, reset]  = useForm({
        description: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (description.trim().length <= 1) { return; }

        handleAdd({
            id: new Date().getTime(),
            desc: description,
            done: false
        });

        reset();
    };

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary col-12 mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
};

TodoAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired
};

export default TodoAdd;
