import { getTheme } from '../getTheme';

const Loader = () => {
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);

	return (
		<div className='center loader'>
			<div className='preloader-wrapper big active'>
				<div className={`spinner-layer spinner-${theme}-only`}>
					<div className='circle-clipper left'>
						<div className='circle'></div>
					</div>
					<div className='gap-patch'>
						<div className='circle'></div>
					</div>
					<div className='circle-clipper right'>
						<div className='circle'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
