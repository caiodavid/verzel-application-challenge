export default function (state = false, action) {
	switch (action.type) {
		case 'TOGGLE_LOGIN_MODAL_VISIBILITY':
			return !action.isLoginModalVisible;

		default:
			return state;
	}
}
