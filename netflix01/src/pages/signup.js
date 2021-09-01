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
const SignUp = () => {
	const history = useHistory();

	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// check form input elements are valid
	const isInvalid = firstName === "" || emailAddress === "" || password === "";

	const handleSignUp = (e) => {
		e.preventDefault();
		console.log("SIGN_UP");

		// firebase
		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) => {
				result.user.updateProfile({
					display: firstName,
					photoURL: Math.floor(Math.random() * 5) + 1,
				});
				console.log("====================================");
				console.log("This is result:", result);
				console.log("====================================");
			})
			.then(() => history.push(ROUTES.BROWSE))
			.catch((err) => {
				setFirstName("");
				setEmailAddress("");
				setPassword("");
				setError(err.message);
			});
	};


	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method='POST'>
						<Form.Input
							type='text'
							placeholder='First name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
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
							Sign Up
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						Already a user?{" "}
						<Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
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

export default SignUp;
