const ADD = 'ADD'
const ODD = 'ODD'

const addTodo = () => ({ type: ADD });
const oddTodo = () => ({ type: ODD });

export function todos(state = 10,action){
	switch (action.type){
		case ADD:
			return state + 1;
		case ODD:
			return state - 1;
		default:
			return state
	}
}

export const actionType = {
	addTodo,
	oddTodo
}
