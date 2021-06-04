import { Link } from 'react-router-dom';

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='center'>
			<ul className='pagination'>
				<li className='disabled'>
					<a href='#!'>
						<i className='material-icons'>chevron_left</i>
					</a>
				</li>

				{pageNumbers.map((number) => (
					<li key={number} className=''>
						<Link onClick={() => paginate(number)}>{number}</Link>
					</li>
				))}

				<li className='waves-effect'>
					<a href='#!'>
						<i className='material-icons'>chevron_right</i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
