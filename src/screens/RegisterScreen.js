import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { register } from '../redux/action/userActions';
import { getTheme } from '../getTheme';
const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [conformPassword, setConformPassword] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);
	const { loading } = useSelector((state) => state.userRegister);
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	const submitHandler = (e) => {
		if (password === conformPassword) {
			dispatch(register(name, email, password, conformPassword));
			history.push('/login');
		} else {
			const M = window.M;
			M.toast({ html: 'Passwords need to be match' });
		}
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<br />
					<div className='card'>
						{loading && (
							<div className='progress '>
								<div className={`indeterminate ${theme}`}></div>
							</div>
						)}
						<div className='login-card'>
							<h4>Sign Up</h4>
							<form onSubmit={submitHandler}>
								<div className='input-field '>
									<input
										id='name'
										type='text'
										className='validate'
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
									<label htmlFor='name'>Name</label>
								</div>

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

								<div className='input-field '>
									<input
										id='conformPasseord'
										type='password'
										className='validate'
										value={conformPassword}
										onChange={(e) => setConformPassword(e.target.value)}
										required
									/>
									<label htmlFor='conformPasseord'>Conform Passeord</label>
								</div>

								<div>
									<span className='left'>
										Have an Account? <Link to='/login'>Login</Link>
									</span>
								</div>

								<br />
								<br />
								<div>
									<button className={`waves-effect waves-light btn ${theme}`}>Sign Up</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
