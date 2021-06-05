import { getTheme } from '../getTheme';

const Error = ({ message }) => {
	const theme = getTheme(JSON.parse(localStorage.getItem('favouriteTeam')).team);
	return (
		<h5 className={`${theme.split(' ')[0]}-text text-${theme.split(' ')[1]} center`}>
			😞 {message}
		</h5>
	);
};

export default Error;
