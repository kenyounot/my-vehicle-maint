export const userPostFetch = user => {
	return dispatch => {
		return fetch('/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ user })
		})
			.then(resp => resp.json())
			.then(data => {
				if (data.message) {
				} else {
					console.log(data);
					console.log(data.user);
					console.log(data.jwt);

					localStorage.setItem('token', data.jwt);
					dispatch(loginUser(data.user));
				}
			});
	};
};

const loginUser = userObj => ({
	type: 'LOGIN_USER',
	payload: userObj
});