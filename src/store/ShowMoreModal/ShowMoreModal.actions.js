export function toggleActiveShowMoreModal(activeShowMoreTaskModal) {
	return {
		type: 'TOGGLE_ACTIVE_SHOW_MORE_MODAL_VISIBILITY',
		payload: activeShowMoreTaskModal
	}
}

export function closeActiveShowMoreModal() {
	return {
		type: 'CLOSE_SHOW_MORE_MODAL_VISIBILITY',
	}
}