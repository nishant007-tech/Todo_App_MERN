import axios from 'axios';

const ADD_TODO = 'ADD_TODO';
export const addTodo = (data) => (dispatch) => {
    axios.post('http://localhost:8000/todo/createtodo', { data: data })
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

const GET_TODOS = 'GET_TODOS';
export const getTodos = () => (dispatch) => {
    axios.get('http://localhost:8000/todo/gettodos')
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (todoId) => dispatch => {
    axios.delete(`http://localhost:8000/todo/deletetodo/${todoId}`)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data.todoId
        }))
        .catch(error => console.log(error))
}

export const editTodo = (id, data) => dispatch => {
    axios.post(`http://localhost:8000/todo/edittodo`, { id: id, data: data })
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(error => console.log(error))
}
export const completeTodo = (id) => dispatch => {
    axios.post(`http://localhost:8000/todo/completetodo`, { id: id })
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(error => console.log(error))
}


export const deleteAllTodos = () => dispatch => {
    axios.delete(`http://localhost:8000/todo/deleteAllTodos`)
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        })
        .catch(error => console.log(error))
};
