import React, { useState, useEffect } from "react";
import { Axios } from "../../utils/axios";

const Todo_Container = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getTodos = async () => {
            const response = await Axios().get("/todos");
            console.log(response.data);
            setData(response.data);
        };
        getTodos();
    }, []);
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {data.map((todo) => {
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
