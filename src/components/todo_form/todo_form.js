import React, { useState, useContext } from "react";
import { todoContext } from "../../context/todo_context";
import { Axios } from "../../utils/axios";
const Todo_Form = () => {
    const [info, setInfo] = useState({
        name: "",
        created_at: Date.now(),
    });

    const data = useContext(todoContext);

    const submit = async (e) => {
        e.preventDefault();
        const response = await Axios().post(`/todos/`, info);
        data.setTodo([...data.todo, response.data]);
        setInfo({ name: "", created_at: Date.now() });
    };

    const change = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    return (
        <div className="todo_form">
            <h3>Enter your todos</h3>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter Your Todo"
                    name="name"
                    value={info.name}
                    onChange={change}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Todo_Form;
