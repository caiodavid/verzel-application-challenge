/* const INICIAL_USERS_STATE = {
	users: null{
		name: null,
		email: null,
		password:null ,
		birth:null ,
		cpf:null ,
		cep:null ,
		address:null ,
		addresNumber:null ,
		isLogged: false
	}
} */

export default function (state = [], action) {
	switch (action.type) {

		case 'CREATE_USER':
			return [...state, action.payload];

		case 'USER_LOGIN':
			return state.map(user =>
				user.id === action.payload 
					? {...user, isLogged: true}
					: user
			)

			case 'USER_LOGOUT':
				return state.map(user =>
					user.id === action.payload 
						? {...user, isLogged: false}
						: user
				)

		default:
			return state;
	}
}