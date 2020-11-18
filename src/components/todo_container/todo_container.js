import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos, delete_todo } from "../../actions/todo_action";
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

const Todo_Container = ({ todos, get_todos, delete_todo }) => {
    useEffect(() => {
        const getTodos = async () => {
            get_todos();
        };
        getTodos();
    }, []);

    const markComplete = (e) => {
        e.target.classList.toggle("completed");
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
                        <Card key={el.id} onClick={markComplete}>
                            <CardHeader>{el.name}</CardHeader>
                            <CardBody>
                                <CardText></CardText>
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

export default connect(mapStateToProps, { get_todos, delete_todo })(
    Todo_Container
);
