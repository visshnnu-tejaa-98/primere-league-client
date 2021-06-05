import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BACKEND_ENDPOINT } from '../endpoints';
import { getTheme } from '../getTheme';
import Loader from '../components/Loader';
import logo from '../images/ipl logo.svg';
const Favourites = () => {
	const [teams, setTeams] = useState([]);
	const [favouriteTeam, setFavouriteTeam] = useState('');
	const [loading, setLoading] = useState(false);
	const { id, token, email } = useSelector((state) => state.userLogin.userInfo);
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);

	const history = useHistory();
	useEffect(() => {
		const getAllTeams = () => {
			let uniqueTeams = [];
			let allMatches = JSON.parse(localStorage.getItem('matches'));
			for (let i = 0; i < allMatches.length; i++) {
				if (!uniqueTeams.includes(allMatches[i].team1)) {
					uniqueTeams.push(allMatches[i].team1);
				}
			}
			setTeams((teams) => [...teams, uniqueTeams].flat());
		};
		getAllTeams();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		const putFavouriteTeam = async () => {
			setLoading(true);
			let req = await fetch(`${BACKEND_ENDPOINT}/api/users/favouriteTeam`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: token,
				},
				body: JSON.stringify({ email, favouriteTeam }),
			});
			let res = await req.json();
			console.log(res);
			let team = res.favouriteTeam;
			localStorage.setItem('favouriteTeam', JSON.stringify({ team, id }));
			const M = window.M;
			M.toast({ html: 'Team set as your Favourite, Please reload the page to change the them!' });
			setLoading(false);
			history.push('/');
		};
		putFavouriteTeam();
	};
	return (
		<div className='fav container'>
			<div className='heading '>
				<h3 className={`valign-wrapper ${theme.split(' ')[0]}-text text-${theme.split(' ')[1]}`}>
					<img src={logo} alt='' className='logo' />
					<strong>All Teams</strong>
				</h3>
			</div>
			<h5 className={`center ${theme.split(' ')[0]}-text text-${theme.split(' ')[1]}`}>
				Select Your Favourite Team Here
			</h5>
			<form onSubmit={submitHandler}>
				<div className='row'>
					{teams.map((team) => {
						return (
							<div className='col l5 m6 s12 offset-l1'>
								<p>
									<label>
										<input
											class='with-gap'
											name='team'
											type='radio'
											value={team}
											onChange={(e) => setFavouriteTeam(e.target.value)}
										/>
										<span>{team}</span>
									</label>
								</p>
							</div>
						);
					})}
				</div>
				<div className='center'>
					<button className={`waves-effect waves-light btn ${theme} `} type='submit'>
						Add to favourites
					</button>
				</div>
				{loading && <Loader />}
				<br />
			</form>
		</div>
	);
};

export default Favourites;
