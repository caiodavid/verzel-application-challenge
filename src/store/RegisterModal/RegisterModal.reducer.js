export default function (state = false, action) {
	switch (action.type) {
		
		case 'TOGGLE_REGISTER_MODAL_VISIBILITY':
			return !action.isRegisterModalVisible;

		default:
			return state;
	}
}
