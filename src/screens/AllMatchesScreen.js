import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatches } from '../redux/action/matchActions';
import logo from '../images/ipl logo.svg';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
const AllMatches = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchYear, setSearchYear] = useState('');
	const [allMatches, setAllMatches] = useState([]);
	const [filteredMatches, setFilteredMatches] = useState([]);
	const dispatch = useDispatch();
	const { matches, loading, error } = useSelector((state) => state.allMatches);
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, [loading]);
	useEffect(() => {
		let array = JSON.parse(localStorage.getItem('matches'));
		console.log(array);
		setFilteredMatches(array);
		setAllMatches(array);
		// if (!array) {
		// 	dispatch(getAllMatches());
		// 	let array = JSON.parse(localStorage.getItem('matches'));
		// 	setAllMatches(array);
		// 	setFilteredMatches(array);
		// }
	}, []);

	const getData = (e) => {
		e.preventDefault();
		let array = allMatches.filter(
			(match) =>
				(match.season == searchYear || searchYear === '') &&
				(match.team1.toLowerCase().includes(searchTerm) ||
					searchTerm === ' ' ||
					match.team2.toLowerCase().includes(searchTerm) ||
					searchTerm === ' ')
		);
		setFilteredMatches(array);
		console.log(array);
		console.log(searchTerm, searchYear);
		dispatch(getAllMatches());
	};

	// pagination code start

	// const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(30);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredMatches.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// pagination code end

	return (
		<div className='home '>
			{/* {allMatches && array.push(matches)}
			{matches && console.log(array)} */}
			{!loading && (
				<div className='heading '>
					<h3 className='valign-wrapper blue-text text-darken-4'>
						<img src={logo} alt='' className='logo' />
						<strong>All Matches</strong>
					</h3>
				</div>
			)}

			{!loading && (
				<div className='filters'>
					<div className='row container'>
						<div className='col s12 m6 l5 offset-l1'>
							<div className='input-field '>
								<select
									onChange={(e) => {
										setSearchYear(e.target.value);
									}}
									value={searchYear.toLowerCase()}
								>
									<option value='' defaultValue>
										All
									</option>
									<option value='2019'>2019</option>
									<option value='2018'>2018</option>
									<option value='2017'>2017</option>
									<option value='2016'>2016</option>
									<option value='2015'>2015</option>
									<option value='2014'>2014</option>
									<option value='2013'>2013</option>
									<option value='2012'>2012</option>
									<option value='2011'>2011</option>
									<option value='2010'>2010</option>
									<option value='2009'>2009</option>
								</select>
								<label>Filter by Year</label>
							</div>
						</div>
						<div className='col s12 m6 l5'>
							<nav>
								<div className='nav-wrapper blue darken-2'>
									<form>
										<div className='input-field'>
											<input
												id='search'
												type='search'
												value={searchTerm.toLowerCase()}
												onChange={(e) => setSearchTerm(e.target.value)}
											/>
											<label className='label-icon' htmlFor='search'>
												<i className='material-icons'>search</i>
											</label>
											<i className='material-icons'>close</i>
										</div>
									</form>
								</div>
							</nav>
						</div>
					</div>
					<div className='center'>
						<Link className='waves-effect waves-light btn blue darken-3' onClick={getData}>
							<i className='material-icons left'>search</i>search
						</Link>
					</div>
				</div>
			)}

			{loading && <Loader />}
			{error && !loading && <Error message={error} />}

			{!error && !loading && currentPosts && (
				<div className='row center'>
					<br />
					{currentPosts.map((match) => {
						return <Card match={match} key={match._id} />;
					})}
				</div>
			)}

			{allMatches && (
				<Pagination
					postsPerPage={postsPerPage}
					paginate={paginate}
					totalPosts={filteredMatches.length}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default AllMatches;
