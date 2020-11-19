import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./stats.scss";

const Stats = ({ todos }) => {
    useEffect(() => {});

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
export default connect(mapStateToProps, {})(Stats);
