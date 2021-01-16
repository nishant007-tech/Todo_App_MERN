import React from 'react'
import { connect } from 'react-redux';
import Todolist from './todolist';

import { addTodo, deleteAllTodos } from '../actions/index';

const AddTodo = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        let input = e.target.userInput.value;
        props.addTodo(input);
        e.target.userInput.value = '';
    };

    const deleteAllTodos = (e) => {
        props.deleteAllTodos();
    }

    return (
        <div className="container">
            <div className="todoContent">
                <h1>MY To Do List</h1>
                <form onSubmit={submitHandler}>
                    <input name="userInput" type="text" id="myInput" placeholder="Write here..." />
                    <button id="addBtn" className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button onClick={deleteAllTodos} id="DeleleAllTodo" className="delete-button" type="submit">
                        Delete All Todos
                    </button>
                </form>
            </div>
            <Todolist />
        </div>
    )
}

export default connect(null, { deleteAllTodos, addTodo })(AddTodo);
