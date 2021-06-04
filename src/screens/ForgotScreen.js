import { useEffect, useState } from 'react';
import { BACKEND_ENDPOINT } from '../endpoints';
const ForgotScreen = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		if (email) {
			let data = { email };
			let sendMail = async () => {
				let req = await fetch(`${BACKEND_ENDPOINT}/api/users/forgot`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
				let res = await req.json();
				setMessage(res.message);
			};
			sendMail();
		}
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<br />
					<div className='card'>
						<div className='login-card'>
							<h4>Enter Your Email</h4>
							<form onSubmit={submitHandler}>
								<div className='input-field '>
									<input
										id='email'
										type='email'
										className='validate'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<label htmlFor='email'>Email</label>
									<p className='red-text'>* Entered email will get a link to reset password</p>
								</div>
								<div>
									<button className='waves-effect waves-light btn blue darken-3 '>
										Send Email
									</button>
								</div>
							</form>
						</div>
					</div>
					<br />
					<h6 className='blue-text'>{message}</h6>
				</div>
			</div>
		</div>
	);
};

export default ForgotScreen;
