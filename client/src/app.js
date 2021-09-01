import React from 'react';
// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ErrorPage from './pages/error';
// Routes
import * as ROUTES from './constants/routes';

const App = () => {
    console.log(789);

    return (
        <div>
            <Router>
                <Switch>
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

                    <Route
                        exact
                        path={ROUTES.BROWSE}
                    >
                        <BrowsePage />
                    </Route>

                    <Route
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.HOME}
                    >
                        <HomePage />
                    </Route>

                    <Route path='*'>
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
