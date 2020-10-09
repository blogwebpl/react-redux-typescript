import { Todo, User } from '../actions';

import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { usersReducer } from './users';

export interface StoreState {
	users: User[];
	todos: Todo[];
}

export default combineReducers<StoreState>({
	users: usersReducer,
	todos: todosReducer
});