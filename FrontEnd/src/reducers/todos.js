const initialState = {
    todoData: [],
};
const todos = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TODOS':
            return {
                ...state,
                todoData: action.payload,
            }

        case 'ADD_TODO':
            return {
                ...state,
                todoData: [action.payload, ...state.todoData]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todoData: state.todoData.filter(todo => todo._id !== action.payload)
            }
        default:
            return state;
    }
};

export default todos;