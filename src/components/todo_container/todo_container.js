import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    get_todos,
    delete_todo,
    toggle_complete,
} from "../../actions/todo_action";
import { Alert } from "reactstrap";
import "./todo_container.scss";
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardText,
} from "reactstrap";

const Todo_Container = ({ todos, get_todos, delete_todo, toggle_complete }) => {
    useEffect(() => {
        const getTodos = async () => {
            get_todos();
        };
        getTodos();
    }, []);

    const markComplete = async (e, el) => {
        e.target.classList.toggle("completed");
        el.completed === "no" ? (el.completed = "yes") : (el.completed = "no");
        toggle_complete(el.id, el.completed);
    };
    const deleteItem = (item) => {
        delete_todo(item.id);
    };
    return (
        <div className="todo_container">
            <section className="card_container">
                {todos.length < 1 ? (
                    <Alert color="danger">There are no todos</Alert>
                ) : null}
                {todos.map((el) => {
                    return (
                        <Card
                            className={
                                el.completed === "yes" ? "completed" : null
                            }
                            key={el.id}
                            onClick={(e) => markComplete(e, el)}
                        >
                            <CardHeader>{el.name}</CardHeader>
                            <CardBody>
                                <CardText>{el.description}</CardText>
                                <Button
                                    color="danger"
                                    onClick={() => deleteItem(el)}
                                >
                                    Delete
                                </Button>
                            </CardBody>
                            <CardFooter>Created on: {el.created_at}</CardFooter>
                        </Card>
                    );
                })}
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, {
    get_todos,
    delete_todo,
    toggle_complete,
})(Todo_Container);
