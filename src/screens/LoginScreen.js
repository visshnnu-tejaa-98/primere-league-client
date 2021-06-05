import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from '../redux/action/userActions';
import { getTheme } from '../getTheme';
const LoginScreen = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const { loading, userInfo, error } = useSelector((state) => state.userLogin);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const redirect = location.search ? location.search.split('=')[1] : '/';
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);

	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	useEffect(() => {
		if (userInfo && userInfo.name) {
			history.push(redirect);
		} else if (userInfo) {
			const M = window.M;
			M.toast({ html: userInfo.message });
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<br />
					<div className='card'>
						{/* loader */}
						{loading && (
							<div className='progress '>
								<div className={`indeterminate ${theme}`}></div>
							</div>
						)}
						{error && <h4 className={`${theme.split(' ')[0]}`}>Something went wrong</h4>}

						<div className='login-card'>
							<h4>Login</h4>
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
								</div>

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

								<div>
									<span className='left'>
										New User?
										<Link to='/register'> Sign Up </Link>
									</span>
									<span className='right'>
										Forgot Password? <Link to='/forgot'>Reset</Link>
									</span>
								</div>
								<br />
								<br />
								<div>
									<button className={`waves-effect waves-light btn ${theme}`}>Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
