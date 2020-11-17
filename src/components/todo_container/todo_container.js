import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos, delete_todo } from "../../actions/todo_action";
import { Alert } from "reactstrap";
import "./todo_container.scss";

const Todo_Container = ({ todos, get_todos, delete_todo }) => {
    useEffect(() => {
        const getTodos = async () => {
            get_todos();
        };
        getTodos();
    }, []);

    const deleteItem = (item) => {
        delete_todo(item.id);
    };
    return (
        <div className="todo_container">
            <h1>Here are you todos</h1>
            {todos.length < 1 ? (
                <Alert color="danger">There are no todos</Alert>
            ) : null}
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

export default connect(mapStateToProps, { get_todos, delete_todo })(
    Todo_Container
);
