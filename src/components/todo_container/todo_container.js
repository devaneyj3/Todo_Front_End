import React, { useEffect } from "react";
import moment from "moment";
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
    CardTitle,
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
        if (el.completed === "no") {
            el.completed = "yes";
            el.completed_at = moment().format("llll");
        } else {
            el.completed = "no";
            el.completed_at = null;
        }
        toggle_complete(el);
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
                        <Card key={el.id} onClick={(e) => markComplete(e, el)}>
                            <CardHeader
                                className={
                                    el.completed === "yes" ? "completed" : null
                                }
                            >
                                {el.name}
                            </CardHeader>
                            <CardTitle>
                                {el.completed_at !== null
                                    ? `Completed at: ${el.completed_at}`
                                    : null}
                            </CardTitle>
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
