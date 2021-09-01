import React, { useState, useContext } from "react";

// React-router-dom
import { useHistory } from "react-router-dom";

// Firebase
import FirebaseContext from "../context/firebase";

// Component
import HeaderContainer from "../containers/header";
import Form from "../components/form";
import FooterContainer from "../containers/footer";

// Page
import * as ROUTES from "../constants/routes";
const SignIn = () => {
	const { firebase } = useContext(FirebaseContext);

	const history = useHistory();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// check form input elements are valid
	const isInvalid = emailAddress === "" || password === "";

	const handleSignIn = (e) => {
		e.preventDefault();
		console.log("SUBMITTED");

		// firebase works here!
		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				// push to the browse page if success
				history.push(ROUTES.BROWSE);
			})
			.catch((err) => {
				setEmailAddress("");
				setPassword("");
				setError(err.message);
			});
	};

	// email & password

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn} method='POST'>
						<Form.Input
							type='email'
							placeholder='Email address'
							value={emailAddress}
							onChange={(e) => setEmailAddress(e.target.value)}
						/>
						<Form.Input
							type='password'
							placeholder='Password'
							autoComplete='off'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Submit type='submit' disabled={isInvalid}>
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign Up</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you are not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignIn;
