import React, { useState } from "react";

const Todo_Form = () => {
    const [todo, setTodo] = useState({
        name: "",
        created_at: Date.now(),
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(todo);
        setTodo(todo);
    };

    const change = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    return (
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
    );
};

export default Todo_Form;
