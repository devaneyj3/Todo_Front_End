import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
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
	const deleteItem = (item) => {
		delete_todo(item.id);
	};

	const toggleDoneOrNot = (todo) => {
		if (todos.includes(todo)) {
			toggle_complete(todo);
		} else {
			return;
		}
	};
	return (
		<div className="todo_container">
			<section className="card_container">
				{todos.length < 1 ? (
					<Alert color="danger">There are no todos</Alert>
				) : (
					todos.map((el) => {
						return (
							<Card key={el.id} className={el.completed ? "completed" : null}>
								<CardHeader>{el.name}</CardHeader>
								<CardTitle>
									{!el.completed ? (
										<Alert color="info">Pending</Alert>
									) : (
										`Completed at: ${el.completed_at}`
									)}
								</CardTitle>
								<CardBody>
									<CardText>{el.description}</CardText>
									<Button color="danger" onClick={() => deleteItem(el)}>
										Delete
									</Button>
									<Button color="info" onClick={() => toggleDoneOrNot(el)}>
										{el.completed ? "Pending" : "Done"}
									</Button>
								</CardBody>
								<CardFooter>
									Created on: {moment(el.createdAt).format("llll")}
								</CardFooter>
							</Card>
						);
					})
				)}
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
