import { Link } from 'react-router-dom';
import logo from '../images/ipl logo.svg';

const Card = ({ match }) => {
	return (
		<div className='col s12 m6 l4 '>
			<Link to={`${match._id}`} className='blue-text text-darken-4'>
				<div className='card card-column'>
					<div className='row valign-wrapper'>
						<div className='col s8 center'>
							<h5>{match.team1}</h5>
							<h6>VS</h6>
							<h5>{match.team2}</h5>
						</div>
						<div className='col s4 '>
							<img src={logo} alt='' className='card-image' />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
