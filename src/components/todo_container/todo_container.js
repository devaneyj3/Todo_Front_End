import React, { useEffect } from "react";
import "./todo_container.scss";

const Todo_Container = () => {
    // useEffect(() => {
    //     const getTodos = async () => {};
    //     getTodos();
    // }, []);

    const deleteItem = (item) => {
        console.log("deleting, ", item.id);
    };
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {/* {todo.map((el) => {
                return (
                    <div key={el.id}>
                        <h3>{el.name}</h3>
                        <button onClick={() => deleteItem(el)}>Delete</button>
                    </div>
                );
            })} */}
        </div>
    );
};

export default Todo_Container;
