import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/action/userActions';

const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	});

	const [userInfo, setUserInfo] = useState({});
	const user = useSelector((state) => state.userLogin);
	const dispatch = useDispatch();

	useEffect(() => {
		setUserInfo(user.userInfo);
	}, [user, userInfo]);

	const logoutHandler = () => {
		dispatch(logout());
		setUserInfo(null);
	};
	return (
		<div className='navbar'>
			<nav className='blue darken-2'>
				<div className='nav-wrapper container'>
					<Link to='/' className='brand-logo'>
						Primere League
					</Link>
					<Link data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						{userInfo && userInfo.name ? null : (
							<li>
								<a href='/matches' className='waves-effect waves btn-flat white-text'>
									All Matches
								</a>
							</li>
						)}

						<li>
							{userInfo && userInfo.name ? (
								<div>
									<Link
										className='dropdown-trigger btn btn-flat white-text dropdown-btn'
										data-target='dropdown1'
									>
										<i className='material-icons right'>arrow_drop_down</i>
										<strong>{userInfo.name}</strong>
									</Link>
									<ul id='dropdown1' className='dropdown-content dropdown-navbar'>
										<li>
											<Link to='/matches'>All Matches</Link>
										</li>
										<li>
											<Link to='/favourites'>Favourites</Link>
										</li>
										<li>
											<Link to='/' onClick={logoutHandler}>
												Logout
											</Link>
										</li>
									</ul>
								</div>
							) : (
								<a href='/login' className='waves-effect waves btn-flat white-text'>
									<strong>Login</strong>
								</a>
							)}
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<a href='sass.html'>Sass</a>
				</li>
				{/* <li>
					<a href='badges.html'>Components</a>
				</li>
				<li>
					<a href='collapsible.html'>Javascript</a>
				</li>
				<li>
					<a href='mobile.html'>Mobile</a>
				</li> */}
			</ul>
		</div>
	);
};

export default Navbar;
