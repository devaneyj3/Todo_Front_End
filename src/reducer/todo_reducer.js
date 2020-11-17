import { ADD_TODO, GET_TODO } from "../actions/todo_action";

const initialState = {
    todos: [],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload],
            };
        case GET_TODO:
            return {
                todos: action.payload,
            };
        default:
            return state;
    }
};

export default TodoReducer;