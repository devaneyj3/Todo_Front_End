import React, { useContext, useEffect } from "react";
import { Axios } from "../../utils/axios";
import { todoContext } from "../../context/todo_context";

const Todo_Container = () => {
    const { todo, setTodo } = useContext(todoContext);
    useEffect(() => {
        const getTodos = async () => {
            const response = await Axios().get("/todos");
            setTodo(...todo, response.data);
            console.log(todo);
        };
        getTodos();
    }, []);
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {todo.map((todo) => {
                return (
                    <ul key={todo.id}>
                        <li>{todo.name}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Todo_Container;
