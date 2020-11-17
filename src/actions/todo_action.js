import { Axios } from "../utils/axios";
export const ADD_TODO = "ADD_TODO";

export const create_todo = (data) => async (dispatch) => {
    try {
        const response = await Axios().post(`/todos/`, data);
        console.log(response.data);
        dispatch({ type: ADD_TODO, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};
