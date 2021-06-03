import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import MatchDetails from './screens/MatchDetails';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Switch>
				<Route path='/' component={Home} exact></Route>
				<Route path='/:id' component={MatchDetails}></Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
