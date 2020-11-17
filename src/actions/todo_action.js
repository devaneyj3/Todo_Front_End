import { Axios } from "../utils/axios";
export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";

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
