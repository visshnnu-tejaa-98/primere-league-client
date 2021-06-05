import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTheme } from '../getTheme';
const PridictWinner = () => {
	const [team1, setTeam1] = useState('');
	const [team2, setTeam2] = useState('');
	const [venue, setVenue] = useState('');
	const [winner, setWinner] = useState('');
	const [firstBatting, setFirstBatting] = useState('');
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);
	let uniqueTeams = [];
	let uniqueVenues = [];
	const submitHandler = (e) => {
		e.preventDefault();
		if (team1 === team2) {
			const M = window.M;
			M.toast({ html: 'Input need to be different Teams' });
		} else {
			pridictWinner(team1, team2, venue, firstBatting);
		}
	};

	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	});

	// useEffect(() => {
	const getAllTeams = () => {
		let unique = [];
		let allMatches = JSON.parse(localStorage.getItem('matches'));
		for (let i = 0; i < allMatches.length; i++) {
			if (!unique.includes(allMatches[i].team1)) {
				unique.push(allMatches[i].team1);
			}
		}
		uniqueTeams.push(unique);
		console.log(unique);
	};

	getAllTeams();

	const getVenues = () => {
		let unique = [];
		let allMatches = JSON.parse(localStorage.getItem('matches'));
		for (let i = 0; i < allMatches.length; i++) {
			if (!unique.includes(allMatches[i].venue)) {
				unique.push(allMatches[i].venue);
			}
		}
		uniqueVenues.push(unique);
		console.log(uniqueVenues);
	};
	getVenues();

	const pridictWinner = (team1, team2, venue, firstBatting) => {
		console.log({ team1, team2, venue, firstBatting });
		let value = Math.floor(Math.random() * 2) + 1;
		if (value === 1) {
			setWinner(team1);
		} else {
			setWinner(team2);
		}
		console.log(Math.random());
	};
	return (
		<div className='pridictWinner'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<br />
					<div className='card'>
						<div className='login-card center'>
							<h4>Predict Winner</h4>
							<form onSubmit={submitHandler}>
								<br />
								<div class='input-field '>
									<select onChange={(e) => setTeam1(e.target.value)}>
										<option value='' defaultChecked disabled>
											-- Select Team 1 --
										</option>
										{uniqueTeams[0].map((name) => (
											<option value={name}>{name}</option>
										))}
									</select>
									<label>Select Team 1</label>
								</div>

								<div class='input-field '>
									<select onChange={(e) => setTeam2(e.target.value)}>
										<option value='' defaultChecked disabled>
											-- Select Team 1 --
										</option>
										{uniqueTeams[0].map((name) => (
											<option value={name}>{name}</option>
										))}
									</select>
									<label>Select Team 2</label>
								</div>

								<div class='input-field '>
									<select onChange={(e) => setVenue(e.target.value)}>
										<option value='' disabled>
											Select Venue
										</option>
										{uniqueVenues[0].map((name) => (
											<option value={name}>{name}</option>
										))}
									</select>
									<label>Select Venue</label>
								</div>

								<div class='input-field '>
									<select onChange={(e) => setFirstBatting(e.target.value)}>
										<option value='' disabled selected>
											Select First Batting Team
										</option>
										<option value={team1}>{team1}</option>
										<option value={team2}>{team2}</option>
									</select>
									<label>Select First Batting Team</label>
								</div>

								<br />
								<br />
								<div>
									<button className={`waves-effect waves-light btn ${theme}`}>
										Pridict Winner
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='center'>
				{winner && <h5 className={`${theme.split(' ')}-text`}>The Winner is {winner}</h5>}
			</div>
		</div>
	);
};

export default PridictWinner;
