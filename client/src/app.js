import React from 'react';
// React router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ErrorPage from './pages/error';
import WatchPage from './pages/watch';
// Routes
import * as ROUTES from './constants/routes';

const App = () => {
    const user = true;

    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        exact
                        path={ROUTES.BROWSE}
                    >
                        {user ? <BrowsePage /> : <Redirect to={ROUTES.HOME} /> }
                    </Route>

                    <Route
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.HOME}
                    >
                        {!user ? <HomePage /> : <Redirect to={ROUTES.BROWSE} />}
                    </Route>

                    <Route
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_IN}
                    >
                        <SignInPage />
                    </Route>

                    <Route
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_UP}
                    >
                        <SignUpPage />
                    </Route>

                    {user && (
                        <>
                            <Route
                                path={ROUTES.MOVIES}
                            >
                                <BrowsePage type='movies' />
                            </Route>

                            <Route
                                path={ROUTES.SHOWS}
                            >
                                <BrowsePage type='shows' />
                            </Route>

                            <Route
                                path='/watch/:_id'
                            >
                                <WatchPage />
                            </Route>
                        </>
                    )}

                    <Route path='*'>
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
