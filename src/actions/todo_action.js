import { Axios } from "../utils/axios";
export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const create_todo = (data) => async (dispatch) => {
    try {
        const response = await Axios().post(`/todos/`, data);
        dispatch({ type: ADD_TODO, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const get_todos = () => async (dispatch) => {
    try {
        const response = await Axios().get(`/todos`);
        dispatch({ type: GET_TODO, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_TODO, payload: error });
    }
};

export const delete_todo = (id) => async (dispatch) => {
    try {
        await Axios().delete(`/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {
        dispatch({ type: DELETE_TODO, payload: err });
    }
};

export const toggle_complete = (id, data) => async (dispatch) => {
    try {
        const response = await Axios().put(
            `/todos/${id}/toggleComplete/${data}`
        );
        console.log(response.data);
        dispatch({ type: TOGGLE_COMPLETE, payload: response.data });
    } catch (error) {
        dispatch({ type: TOGGLE_COMPLETE, payload: error });
    }
};
