import {
	ADD_TODO,
	GET_TODO,
	DELETE_TODO,
	TOGGLE_COMPLETE,
} from "../actions/todo_action";

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
			let todoToFind = state.todos.find((todo) => todo.id === action.id);
			if (todoToFind) {
				todoToFind.completed = action.completed;
				todoToFind.completed_at = action.completed_at;
			} else {
				console.log("this item is already deleted");
			}
			return {
				todos: [...state.todos],
			};
		default:
			return state;
	}
};

export default TodoReducer;
