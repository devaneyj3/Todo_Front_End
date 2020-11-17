import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos } from "../../actions/todo_action";
import "./todo_container.scss";

const Todo_Container = ({ todos, get_todos }) => {
    useEffect(() => {
        const getTodos = async () => {
            get_todos();
        };
        getTodos();
    }, []);

    const deleteItem = (item) => {
        console.log("deleting, ", item.id);
    };
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {todos.map((el) => {
                return (
                    <div key={el.id}>
                        <h3>{el.name}</h3>
                        <button onClick={() => deleteItem(el)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, { get_todos })(Todo_Container);
