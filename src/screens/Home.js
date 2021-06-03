import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../redux/action/matchActions';
import logo from '../images/ipl logo.svg';
import Bannar from '../components/Bannar';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from '../components/Card';
import Footer from '../components/Footer';
const Home = () => {
	const dispatch = useDispatch();
	const { matches, loading, error } = useSelector((state) => state.allMatches);
	useEffect(() => {
		dispatch(getAllMatches());
	}, []);
	return (
		<div className='home '>
			<Bannar />
			<div className='heading '>
				<h3 className='valign-wrapper blue-text text-darken-4'>
					<img src={logo} alt='' className='logo' />
					<strong>Primere League</strong>
				</h3>
			</div>

			{loading && <Loader />}
			{error && !loading && <Error message={error} />}

			{!error && !loading && matches && (
				<div className='row center'>
					{matches.map((match) => (
						<Card match={match} key={match._id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
