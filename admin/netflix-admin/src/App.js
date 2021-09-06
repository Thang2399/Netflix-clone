import React from 'react';

// Components
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';

// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import UserList from './pages/User/userList/UserList';
import SingleUser from './pages/User/singleUser/SingleUser';
import NewUser from './pages/User/newUser/NewUser';
import MovieList from './pages/Movie/movieList/MovieList';
import SingleMovie from './pages/Movie/singleMovie/SingleMovie';
import NewMovie from './pages/Movie/newMovie/NewMovie';

const App = () => {

return (
		<Router>
			<TopBar />
			<div className='container'>
				<SideBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route exact path='/users'>
						<UserList />
					</Route>
					<Route exact path='/user/:userId'>
						<SingleUser />
					</Route>
					<Route exact path='/newUser'>
						<NewUser />
					</Route>

					<Route exact path='/movies'>
						<MovieList />
					</Route>
					<Route exact path='/movie/:movieId'>
						<SingleMovie />
					</Route>
					<Route exact path='/newMovie'>
						<NewMovie />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
