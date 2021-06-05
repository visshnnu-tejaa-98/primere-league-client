export const getTheme = (teamName) => {
	let uniqueTeams = [];
	let allMatches = JSON.parse(localStorage.getItem('matches'));
	for (let i = 0; i < allMatches.length; i++) {
		if (!uniqueTeams.includes(allMatches[i].team1)) {
			uniqueTeams.push(allMatches[i].team1);
		}
	}
	if (uniqueTeams.includes(teamName)) {
		switch (teamName) {
			case 'Rising Pune Supergiant':
				return ' yellow darken-4 ';
			case 'Delhi Daredevils':
				return 'red';
			case 'Kolkata Knight Riders':
				return 'indigo darken-3';
			case 'Chennai Super Kings':
				return 'orange';
			case 'Royal Challengers Bangalore':
				return 'red darken-1';
			case 'Rajasthan Royals':
				return 'pink darken-1';
			case 'Kings XI Punjab':
				return 'red lighten-1 ';
			case 'Mumbai Indians':
				return 'blue darken-3';
			case 'Deccan Chargers':
				return 'grey darken-1';
			case 'Pune Warriors':
				return 'yellow darken-4 ';
			case 'Gujarat Lions':
				return 'yellow darken-4 ';
			case 'Sunrisers Hyderabad':
				return 'red darken-1';
			case 'Kochi Tuskers Kerala':
				return 'indigo lighten-1';
			case 'Rising Pune Supergiants':
				return 'yellow darken-4 ';
			case 'Delhi Capitals':
				return 'blue darken-3';
			default:
				return 'blue darken-3';
		}
	}
};
