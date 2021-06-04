import logo from '../images/ipl logo.svg';
const Favourites = () => {
	return (
		<div className='fav container'>
			<div className='heading '>
				<h3 className='valign-wrapper blue-text text-darken-4'>
					<img src={logo} alt='' className='logo' />
					<strong>All Teams</strong>
				</h3>
			</div>
			<h5 className='center blue-text text-darken-3'>Select Your Favourite Team Here</h5>
			<a class='waves-effect waves-light btn red lighten-1  '>button</a>
		</div>
	);
};

export default Favourites;
