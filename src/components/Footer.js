import { getTheme } from '../getTheme';

const Footer = () => {
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);
	return (
		<footer className={`page-footer ${theme}`}>
			<div className='container '>
				<div className='row'>
					<div className='col l6 s12'>
						<h5 className='white-text'>Indian Primere League</h5>
						<p className='grey-text text-lighten-4'>
							Here You can find all stats and details of matches played in IPL from 2008.
						</p>
					</div>
					<div className='col l4 offset-l2 s12'>
						<h5 className='white-text'>Links</h5>
						<ul>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Github
								</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='#!'>
									Ipl
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={`footer-copyright `}>
				<div className='container'>
					Copyright © {new Date().getFullYear()}, All rights reserved
					<span className='grey-text text-lighten-4 right'>Designed by Visshnnu Tejaa</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
