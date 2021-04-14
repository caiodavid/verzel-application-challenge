export function createTask(task) {
	return {
		type: 'CREATE_TASK',
		payload: task
	}
}

export function deleteTask(id) {
	return {
		type: 'DELETE_TASK',
		payload: id
	}
}

export function editTask(id, name, delivery_date, conclusion_date) {
	return {
		type: 'EDIT_TASK',
		payload: [id, name, delivery_date, conclusion_date]
	}
}

export function completeTask(id) {
	return {
		type: 'COMPLETE_TASK',
		payload: id
	}
}

export function returnTask(id) {
	return {
		type: 'RETURN_TASK',
		payload: id
	}
}