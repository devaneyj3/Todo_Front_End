import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const create_todo = (data) => async (dispatch) => {
	try {
		const response = await API.graphql(
			graphqlOperation(createTodo, { input: data })
		);
		dispatch({ type: ADD_TODO, payload: response.data.createTodo });
	} catch (err) {
		console.log(err);
	}
};

export const get_todos = () => async (dispatch) => {
	try {
		const response = await API.graphql(graphqlOperation(listTodos));
		dispatch({ type: GET_TODO, payload: response.data.listTodos.items });
	} catch (error) {
		dispatch({ type: GET_TODO, payload: error });
	}
};

export const delete_todo = (id) => async (dispatch) => {
	try {
		await await API.graphql(
			graphqlOperation(deleteTodo, { input: { id: id } })
		);

		dispatch({ type: DELETE_TODO, payload: id });
	} catch (err) {
		dispatch({ type: DELETE_TODO, payload: err });
	}
};

export const toggle_complete = (todo) => async (dispatch) => {
	try {
		const response = await API.graphql(
			graphqlOperation(updateTodo, {
				input: { id: todo.id, completed: !todo.completed },
			})
		);

		dispatch({
			type: TOGGLE_COMPLETE,
			id: response.data.updateTodo.id,
			completed: response.data.updateTodo.completed,
		});
	} catch (error) {
		dispatch({ type: TOGGLE_COMPLETE, payload: error });
	}
};
