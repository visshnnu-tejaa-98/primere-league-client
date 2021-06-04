import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getMatchDetails } from '../redux/action/matchActions';
import logo from '../images/ipl logo.svg';
import Loader from '../components/Loader';
import Error from '../components/Error';

const MatchDetails = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { match, loading, error } = useSelector((state) => state.singleMatchDetais);
	console.log(match);
	useEffect(() => {
		const id = location.pathname.split('/')[1];
		dispatch(getMatchDetails(id));
	}, []);

	return (
		<div className='match-details'>
			<div className='heading '>
				<h3 className='valign-wrapper blue-text text-darken-4'>
					<img src={logo} alt='' className='logo' />
					<strong>Match Details</strong>
				</h3>
			</div>
			{loading && <Loader />}
			{error && <Error message={error} />}
			{!loading && !error && match && (
				<div className='container'>
					<div className='row '>
						<div className='col s12 m6 l4'>
							<div className='card card-details'>
								<h5>
									<strong>Place Details</strong>
								</h5>
								<table>
									<tbody>
										<tr>
											<th>Team 1</th>
											<td>{match.team1}</td>
										</tr>
										<tr>
											<th>Team 2</th>
											<td>{match.team2}</td>
										</tr>
										<tr>
											<th>City</th>
											<td>{match.city}</td>
										</tr>
										<tr>
											<th>Venue</th>
											<td>{match.venue}</td>
										</tr>
										<tr>
											<th>Year</th>
											<td>{match.season}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='col s12 m6 l4'>
							<div className='card card-details'>
								<h5>
									<strong>Toss and Umpire Details</strong>
								</h5>
								<table>
									<tbody>
										<tr>
											<th>Toss Winner</th>
											<td>{match.toss_winner}</td>
										</tr>
										<tr>
											<th>Toss Decission</th>
											<td>{match.toss_decision}</td>
										</tr>
										<tr>
											<th>Umpire 1</th>
											<td>{match.umpire1 ? match.umpire1 : '--NA--'}</td>
										</tr>
										<tr>
											<th>Umpire 2</th>
											<td>{match.umpire2 ? match.umpire2 : '--NA--'}</td>
										</tr>
										<tr>
											<th>Umpire 3</th>
											<td>{match.umpire3 ? match.umpire3 : '--NA--'}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='col s12 m6 l4'>
							<div className='card card-details'>
								<h5>
									<strong>Match Details</strong>
								</h5>
								<table>
									<tbody>
										<tr>
											<th>Winner / tie</th>
											<td>{match.result}</td>
										</tr>
										<tr>
											<th>Winner Team</th>
											<td>{match.winner}</td>
										</tr>
										<tr>
											<th>Won by Runs</th>
											<td>{match.win_by_runs}</td>
										</tr>
										<tr>
											<th>Won by Wickets</th>
											<td>{match.win_by_wickets}</td>
										</tr>
										<tr>
											<th>Man of the Match</th>
											<td>{match.player_of_match}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className='card card-details'>
						<h5>
							<strong>Summary</strong>
						</h5>
						{match.result !== 'tie' ? (
							<div>
								<strong>{match.team1}</strong> vs <strong>{match.team2}</strong> match is held in
								<strong> {match.venue}</strong> at <strong>{match.city}</strong> in
								<strong> {match.season + ', '} </strong>
								Where Toss was won by <strong>{match.toss_winner}</strong> and chooses{' '}
								<strong>{match.toss_decision + 'ing '}</strong>
								and <strong>{match.winner}</strong> by
								<strong>
									{match.win_by_runs
										? match.win_by_runs + ' runs'
										: match.win_by_wickets + ' wickets, '}
								</strong>
								and <strong>{match.player_of_match}</strong> was the Man of the Match.
							</div>
						) : (
							<div>
								<strong>{match.team1}</strong> vs <strong>{match.team2}</strong> match is held in
								<strong> {match.venue}</strong> at <strong>{match.city}</strong> in
								<strong> {match.season + ', '} </strong>
								Where Toss was won by <strong>{match.toss_winner}</strong> and chooses
								<strong>{match.toss_decision + 'ing '}</strong>
								and the match was <strong>{match.result}</strong> and
								<strong> {match.player_of_match}</strong> was the Man of the Match.
							</div>
						)}
					</div>
					<br />
				</div>
			)}
		</div>
	);
};

export default MatchDetails;
