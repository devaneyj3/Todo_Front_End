import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos } from "../../actions/todo_action";
import "./stats.scss";

const Stats = ({ todos }) => {
    useEffect(() => {
        get_todos();
    }, [todos]);

    return (
        <section className="stat_box">
            <p>
                Pending todos:{" "}
                {todos.filter((todo) => todo.completed === "no").length}
            </p>
            <p>
                Completed todos:{" "}
                {todos.filter((todo) => todo.completed === "yes").length}
            </p>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
export default connect(mapStateToProps, { get_todos })(Stats);
