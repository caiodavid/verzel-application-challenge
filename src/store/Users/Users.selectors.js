export const selectUsers = state => state.users

export const selectCurrentUser =
	state => state.users.filter(user => user.isLogged)
