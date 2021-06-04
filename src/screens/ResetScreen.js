import { useEffect, useState } from 'react';
import { BACKEND_ENDPOINT } from '../endpoints';
import { useHistory } from 'react-router-dom';
const ResetPassword = () => {
	const [password, setPassword] = useState('');
	const [conformPassword, setConformPassword] = useState('');
	let history = useHistory();
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);

	let id = window.location.href.split('/')[4];

	const submitHandler = (e) => {
		e.preventDefault();
		if (password === conformPassword) {
			const data = { id, password, conformPassword };
			const changePassword = async () => {
				let req = await fetch(`${BACKEND_ENDPOINT}/api/users/reset/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
				let res = await req.json();

				if (res.message === 'Password Updated') {
					const M = window.M;
					M.toast({ html: res.message });
					history.push('/login');
				} else {
					const M = window.M;
					M.toast({ html: res.message });
				}
			};
			changePassword();
		} else {
			const M = window.M;
			M.toast({ html: 'Passwords should match!' });
		}
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<br />
					<div className='card'>
						<div className='login-card'>
							<h4>Set New Password</h4>
							<form onSubmit={submitHandler}>
								<div className='input-field '>
									<input
										id='password'
										type='password'
										className='validate'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<label htmlFor='password'>Password</label>
								</div>

								<div className='input-field '>
									<input
										id='conformPassword'
										type='password'
										className='validate'
										value={conformPassword}
										onChange={(e) => setConformPassword(e.target.value)}
										required
									/>
									<label htmlFor='conformPassword'>Conform Password</label>
								</div>

								<div>
									<button className='waves-effect waves-light btn blue darken-3 '>
										Reset Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
