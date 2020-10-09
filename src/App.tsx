import React, { useEffect } from 'react';
import { Todo, deleteTodo, fetchTodos } from './actions/todos';
import { User, fetchUsers } from './actions/users';

import { StoreState } from './reducers';
import { connect } from 'react-redux';

interface AppProps {
	fetchUsers: Function;
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
	users: User[];
	todos: Todo[];
}

const App = (props: AppProps): JSX.Element => {
	const onTodoClick = (id: number): void => {
		props.deleteTodo(id);
	};
	useEffect(() => {
		props.fetchUsers();
		props.fetchTodos();
	}, []);
	return (
		<>
			<div>
				{props.users.map((user) => (
					<p key={user.id}>
						{user.name}
						<br />
						{user.email}
					</p>
				))}
			</div>
			<hr />
			<div>
				{props.todos.map((todo) => (
					<p onClick={() => onTodoClick(todo.id)} key={todo.id}>
						{todo.title}
					</p>
				))}
			</div>
		</>
	);
};

const mapStateToProps = ({
	users,
	todos,
}: StoreState): { users: User[]; todos: Todo[] } => ({
	users,
	todos,
});

export default connect(mapStateToProps, { fetchUsers, fetchTodos, deleteTodo })(
	App
);
