import React from "react";
import { connect } from "react-redux";
import "./stats.scss";

const Stats = ({ todos }) => {
    const pending = todos.filter((todo) => todo.completed === "no").length;

    const completed = todos.filter((todo) => todo.completed !== "no").length;

    return (
        <section className="stat_box">
            <p>Pending todos: {pending}</p>
            <p>Completed todos: {completed}</p>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
export default connect(mapStateToProps, {})(Stats);
