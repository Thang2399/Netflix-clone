/* eslint-disable react/prop-types */
import React from "react";

// React-router-dom
import { Route, Redirect } from "react-router-dom";

// Routes
import { SIGN_IN } from "../constants/routes";

const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				// user not logged in, then return the Sign In page
				if (!user) {
					return children;
				} else if (user) {
					// user logged in, then redirect to the loggedInPath
					return <Redirect to={{ pathname: loggedInPath }} />;
				}
				return null;
			}}
		/>
	);
};

const ProtectedRoute = ({ user, children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				// user logged in, then return to the Browse page
				if (user) {
					return children;
				} else if (!user) {
					// user not logged in, redirect to the SIGN_IN page with the state from location
					return (
						<Redirect to={{ pathname: SIGN_IN, state: { from: location } }} />
					);
				}
				return null;
			}}
		/>
	);
};

export { IsUserRedirect, ProtectedRoute };
