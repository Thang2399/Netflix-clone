/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";

// Routes
import * as ROUTES from "../constants/routes";

// logo
import logo from "../logo.svg";

// Header
import Header from "../components/header";

// Profiles
import Profiles from "../components/profiles";

// eslint-disable-next-line no-unused-vars
const SelectProfileContainer = ({ user, setProfile }) => {
	// console.log("user", user);
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
				</Header.Frame>
			</Header>

			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoUrl: user.photoURL,
							})
						}>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
};

export default SelectProfileContainer;
