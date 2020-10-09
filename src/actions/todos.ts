import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchToDosAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[]
}

export interface DeleteToDoAction {
	type: ActionTypes.deleteTodo,
	payload: number
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>('http://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: 5
			}
		});
		dispatch<FetchToDosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data
		});
	}
}

export const deleteTodo = (id: number): DeleteToDoAction => ({
	type: ActionTypes.deleteTodo,
	payload: id
});