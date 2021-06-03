import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<nav className='blue darken-2'>
				<div class='nav-wrapper container'>
					<a href='#!' class='brand-logo'>
						Primere League
					</a>
					<Link to='#' data-target='mobile-demo' class='sidenav-trigger'>
						<i class='material-icons'>menu</i>
					</Link>
					<ul class='right hide-on-med-and-down'>
						<li>
							<a class='waves-effect waves btn-flat white-text'>
								<strong>Login</strong>
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul class='sidenav' id='mobile-demo'>
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
