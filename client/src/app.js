import React from 'react';
// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// custom hook
import useAuthListener from './hooks/use-auth-listener';
// Pages
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ErrorPage from './pages/error';
// Routes
import * as ROUTES from './constants/routes';
// import { IsUserRedirect, ProtectedRoutes } from './helper/routes';

const App = () => {
    const { user } = useAuthListener();
    console.log('====================================');
    console.log(user);
    console.log('====================================');

    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        user={user}
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_IN}
                    >
                        <SignInPage />
                    </Route>

                    <Route
                        user={user}
                        exact
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_UP}
                    >
                        <SignUpPage />
                    </Route>

                    <Route
                        user={user}
                        exact
                        path={ROUTES.BROWSE}
                    >
                        <BrowsePage />
                    </Route>

                    <Route
                        user={user}
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
