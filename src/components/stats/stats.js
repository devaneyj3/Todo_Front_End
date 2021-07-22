import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos } from "../../actions/todo_action";
import "./stats.scss";

const Stats = ({ todos, get_todos }) => {
	useEffect(() => {
		get_todos();
	}, [get_todos]);

	console.log(todos);

	return (
		<section className="stat_box">
			<p>
				Pending todos:
				{todos.length < 1
					? 0
					: todos.filter((todo) => todo.completed === false).length}
			</p>
			<p>
				Completed todos:{" "}
				{todos.length < 1
					? 0
					: todos.filter((todo) => todo.completed === true).length}
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
