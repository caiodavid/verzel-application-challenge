export function toggleActiveEditModal(activeEditTaskModal) {
	return {
		type: 'TOGGLE_ACTIVE_EDIT_MODAL_VISIBILITY',
		payload: activeEditTaskModal
	}
}

export function closeActiveEditModal() {
	return {
		type: 'CLOSE_EDIT_MODAL_VISIBILITY',
	}
}

