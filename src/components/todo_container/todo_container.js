import React, { useContext, useEffect } from "react";
import { Axios } from "../../utils/axios";
import { todoContext } from "../../context/todo_context";
import "./todo_container.scss";

const Todo_Container = () => {
    const { todo, setTodo } = useContext(todoContext);
    useEffect(() => {
        const getTodos = async () => {
            const response = await Axios().get("/todos");
            setTodo(...todo, response.data);
        };
        getTodos();
    }, []);
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {todo.map((el, index) => {
                return (
                    <div key={index}>
                        <h3>{el.name}</h3>
                        <button>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Todo_Container;
