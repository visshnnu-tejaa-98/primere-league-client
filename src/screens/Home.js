import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../redux/action/matchActions';
import logo from '../images/ipl logo.svg';
import Bannar from '../components/Bannar';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from '../components/Card';
const Home = () => {
	const dispatch = useDispatch();
	const { matches, loading, error } = useSelector((state) => state.allMatches);

	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	useEffect(() => {
		dispatch(getAllMatches());
	}, []);

	return (
		<div className='home '>
			<Bannar />
			<div className='heading '>
				<h3 className='valign-wrapper blue-text text-darken-4'>
					<img src={logo} alt='' className='logo' />
					<strong>Latest Matches</strong>
				</h3>
			</div>

			{loading && <Loader />}
			{error && !loading && <Error message={error} />}

			{!error && !loading && matches && (
				<div>
					<div className='row center'>
						{matches.map((match) => {
							if (match.season === 2019) {
								return <Card match={match} key={match._id} />;
							}
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
