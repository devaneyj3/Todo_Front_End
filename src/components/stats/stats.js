import React from "react";
import { connect } from "react-redux";
import "./stats.scss";

const Stats = ({ todos }) => {
    return (
        <section className="stat_box">
            <p>To Be Completed: {todos.length}</p>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
export default connect(mapStateToProps, {})(Stats);
