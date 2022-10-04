import { combineReducers } from 'redux';

const initialState = {
	isAuthenticated: true,
	userId: '',
};
const authReducer = (
	state = initialState,
	action: {
		type: string;
		payload: string;
	}
) => {
	switch (action.type) {
		case 'LOGIN':
			const newstate = { isAuthenticated: true, userId: action.payload };
			console.log(newstate);
			return newstate;
		case 'LOGOUT':
			return {
				...state,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};

export const reducers = combineReducers({ authReducer });
