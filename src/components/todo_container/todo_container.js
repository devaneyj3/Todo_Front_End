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
    CardTitle,
    CardText,
} from "reactstrap";

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
            <h3>Here are you todos</h3>
            {todos.length < 1 ? (
                <Alert color="danger">There are no todos</Alert>
            ) : null}
            <section className="card_container">
                {todos.map((el) => {
                    return (
                        <Card key={el.id}>
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
                            <CardFooter />
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
