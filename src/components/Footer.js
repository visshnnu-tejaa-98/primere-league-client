const Footer = () => {
	return (
		<footer class='page-footer blue darken-3'>
			<div class='container '>
				<div class='row'>
					<div class='col l6 s12'>
						<h5 class='white-text'>Indian Primere League</h5>
						<p class='grey-text text-lighten-4'>
							Here You can find all stats and details of matches played in IPL from 2008.
						</p>
					</div>
					<div class='col l4 offset-l2 s12'>
						<h5 class='white-text'>Links</h5>
						<ul>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Github
								</a>
							</li>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Ipl
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='footer-copyright blue darken-4'>
				<div class='container'>
					Copyright © {new Date().getFullYear()}, All rights reserved
					<span class='grey-text text-lighten-4 right'>Designed by Visshnnu Tejaa</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
