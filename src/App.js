import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import MatchDetails from './screens/MatchDetails';
import RegisterScreen from './screens/RegisterScreen';
import ForgotScreen from './screens/ForgotScreen';
import ResetPassword from './screens/ResetScreen';
import AllMatches from './screens/AllMatchesScreen';
import Favourites from './screens/Favourites';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Switch>
				<Route path='/favourites' component={Favourites}></Route>
				<Route path='/matches' component={AllMatches}></Route>
				<Route path='/reset/:id' component={ResetPassword}></Route>
				<Route path='/forgot' component={ForgotScreen} exact></Route>
				<Route path='/login' component={LoginScreen} exact></Route>
				<Route path='/register' component={RegisterScreen} exact></Route>
				<Route path='/' component={Home} exact></Route>
				<Route path='/:id' component={MatchDetails}></Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
