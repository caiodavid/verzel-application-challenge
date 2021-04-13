export function createUser(user) {
	return {
		type: 'CREATE_USER',
		payload: user
	}
}

export function userLogin(id) {
	return {
		type: 'USER_LOGIN',
		payload: id
	}
}

export function userLogout(id) {
	return {
		type: 'USER_LOGOUT',
		payload: id
	}
}



