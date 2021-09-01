import React, { useState, useContext } from 'react';
// Icons
import { AiOutlineGoogle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
// React router dom
import { Link, useHistory } from 'react-router-dom';

// Routes
import * as ROUTES from '../../constants/routes';
// Firebase
import FirebaseContext from '../../context/firebase';

const SignInForm = () => {
    const { firebase } = useContext(FirebaseContext);
    console.log(firebase);

    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // firebase works here
        firebase
            .auth()
            .signInWithEmailAndPassword(
                emailAddress, password)
            .then(() => {
                // push to the browse page if success
                history.push(ROUTES.BROWSE);
            })
            .catch((err) => {
                setEmailAddress('');
                setPassword('');
                setError(err.message);
            });
    }

    function handleChangePassword(e) { setPassword(e.target.value); }
    function handleChangeEmail(e) { setEmailAddress(e.target.value); }

    return (
        <div className='h-4/5 mb-10 px-60 max-w-5xl w-full mx-auto text-white'>
            <div className='h-4/5 px-20 pt-10 bg-black bg-opacity-70 flex flex-col items-start hover:bg-opacity-100'>
                <h3 className='text-3xl font-semibold mb-6'>Sign In</h3>
                <div className='w-full'>
                    {error && <h1>{error}</h1>}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            value={emailAddress}
                            onChange={handleChangeEmail}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <input
                            type='password'
                            placeholder='Enter your password'
                            autoComplete='off'
                            value={password}
                            onChange={handleChangePassword}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <button type='submit' className='mb-4 p-3 rounded bg-red-600 font-bold text-xl'>
                            Sign In
                        </button>
                    </form>
                    <SignUpWithSocials />
                </div>
                <p className='mb-4 text-gray-500 text-lg'>
                    New to Netflix?
                    {' '}
                    <Link to={ROUTES.SIGN_UP} className='text-white hover:underline'>Sign up now</Link>
                </p>
                <p className='mb-4 text-gray-500 text-sm'>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
                </p>
            </div>
        </div>
    );
};

export const SignUpWithSocials = () => {
    function handleSignUpWithGoogle() {
        console.log('Google');
    }

    function handleSignUpWithFacebook() {
        console.log('Facebook');
    }

    return (
        <div className='flex flex-row justify-between items-center mb-4'>
            <button
                type='button'
                onClick={handleSignUpWithGoogle}
                className='w-1/2 mr-2 p-3 bg-red-400 flex justify-center items-center text-2xl rounded hover:bg-red-600'
            >
                <AiOutlineGoogle />
                {' '}
            </button>
            <button
                type='button'
                onClick={handleSignUpWithFacebook}
                className='w-1/2 p-3 bg-red-400 flex justify-center items-center text-2xl rounded hover:bg-red-600'
            >
                <FaFacebook />
            </button>
        </div>
    );
};

export default SignInForm;
