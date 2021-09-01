import React from "react";

// Custom hook to save user info on the localStorage
import useAuthListener from "./hooks/use-auth-listener";

// React-router-dom
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Routes
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";

// Pages
import Home from "./pages/home";
import Browse from "./pages/browse";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
	const { user } = useAuthListener();
	return (
		<Router>
			<Switch>
				<IsUserRedirect
					user={user}
					exact
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}>
					<SignIn />
				</IsUserRedirect>

				<IsUserRedirect
					user={user}
					exact
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}>
					<SignUp />
				</IsUserRedirect>

				<ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>

				<IsUserRedirect
					user={user}
					exact
					path={ROUTES.HOME}
					loggedInPath={ROUTES.BROWSE}>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}

export default App;
