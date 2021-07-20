import {
	ADD_TODO,
	GET_TODO,
	DELETE_TODO,
	TOGGLE_COMPLETE,
} from "../actions/todo_action";
import moment from "moment";

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
		case DELETE_TODO:
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case TOGGLE_COMPLETE:
			const todoToFind = state.todos.find((todo) => todo.id === action.id);
			todoToFind.completed = !todoToFind.completed;
			todoToFind.completed_at = moment().format("llll");
			return {
				todos: [...state.todos],
			};
		default:
			return state;
	}
};

export default TodoReducer;
