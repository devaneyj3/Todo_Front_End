import React, { useState } from "react";
import { create_todo } from "../../actions/todo_action";
import { connect } from "react-redux";
import "./todo_form.scss";
const Todo_Form = ({ create_todo }) => {
	const [info, setInfo] = useState({
		name: "",
		description: "",
		completed: false,
	});

	const submit = async (e) => {
		e.preventDefault();
		create_todo(info);
		setInfo({
			name: "",
			description: "",
			completed: false,
		});
	};

	const change = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	return (
		<div className="todo_form">
			<form onSubmit={submit}>
				<input
					type="text"
					placeholder="Enter Your Todo"
					name="name"
					value={info.name}
					onChange={change}
				/>
				<textarea
					placeholder="Enter Description"
					name="description"
					value={info.description}
					onChange={change}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps, { create_todo })(Todo_Form);
