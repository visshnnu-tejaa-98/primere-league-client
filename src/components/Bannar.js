import { useEffect } from 'react';

const Bannar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className=''>
			<div className='bannar'></div>
		</div>
	);
};

export default Bannar;
