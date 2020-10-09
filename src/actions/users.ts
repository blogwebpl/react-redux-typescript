import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

export interface User {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		},
		phone: string,
		website: string,
		company: {
			name: string,
			catchPhrase: string,
			bs: string
		}
	}
}

export interface FetchUsersAction {
	type: ActionTypes.fetchUsers;
	payload: User[];
}

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<User[]>('http://jsonplaceholder.typicode.com/users',{
			params: {
				_limit: 3
			}
		});
		dispatch<FetchUsersAction>({
			type: ActionTypes.fetchUsers,
			payload: response.data
		});
	}
}