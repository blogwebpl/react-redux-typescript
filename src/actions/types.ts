import { DeleteToDoAction, FetchToDosAction } from './todos';

import { FetchUsersAction } from './users';

export enum ActionTypes {
	fetchUsers = 'fetchUsers',
	fetchTodos = 'fetchTodos',
	deleteTodo = 'deleteToDo'
}

export type Action = FetchUsersAction | FetchToDosAction | DeleteToDoAction;