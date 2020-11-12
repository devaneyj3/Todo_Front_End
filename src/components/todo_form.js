import React, { useState } from "react";
import { Axios } from "../utils/axios";
const Todo_Form = () => {
    const [todo, setTodo] = useState({
        name: "",
        created_at: Date.now(),
    });

    const submit = async (e) => {
        e.preventDefault();
        console.log(todo);
        setTodo(todo);
        const response = await Axios().post(`/todos/`, todo);
        console.log(response.data);
    };

    const change = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    return (
        <div className="todo_form">
            <h3>Enter your todos</h3>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter Your Todo"
                    name="name"
                    value={todo.name}
                    onChange={change}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Todo_Form;
