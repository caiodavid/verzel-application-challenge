export default function (state = [], action) {
	switch (action.type) {

		case 'TOGGLE_ACTIVE_SHOW_MORE_MODAL_VISIBILITY':
			return state[0] = action.payload;

		case 'CLOSE_SHOW_MORE_MODAL_VISIBILITY':
			return state = []

		default:
			return state;
	}
}