export default function (state = [], action) {
	switch (action.type) {

		case 'CREATE_TASK':
			return [...state, action.payload];

		case 'DELETE_TASK':
			return state.filter(task => task.id !== action.payload)

		case 'EDIT_TASK':
			return state.map(task =>
				task.id === action.payload
					? { ...task, isLogged: false }
					: task
			)

		case 'COMPLETE_TASK':
			return state.map(task =>
				task.id === action.payload
					? { ...task, isFinished: true }
					: task
			)

		case 'RETURN_TASK':
			return state.map(task =>
				task.id === action.payload
					? { ...task, isFinished: false }
					: task
			)

		default:
			return state;
	}
}