import React, {useState, useContext} from 'react';
// React router dom
import { Link, useHistory } from 'react-router-dom';

// Routes
import * as ROUTES from '../../constants/routes';
// Component
import { SignUpWithSocials } from './sign-in-form';
// Firebase
import FirebaseContext from '../../context/firebase';

const SignUpForm = () => {
    const {firebase} = useContext(FirebaseContext);

    const history = useHistory();

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Signed Up');

        if (!name || !emailAddress || !password || !passwordConfirm) {
            setError('Empty value');
        } else if (password !== passwordConfirm) {
            setError('Your confirm password does not match password');
        } else if (password.length < 6) {
            setError('Your password must be at least 6 characters');
        } else {
            // firebase works here
            firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password)
                .then((result) => {
                    result.user.updateProfile({
                        display: name,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    });
                    console.log('This is result', result);
                })
                .then(() => console.log('456'))
                .then(() => history.push(ROUTES.BROWSE))
                .catch((err) => {
                    setName('');
                    setEmailAddress('');
                    setPassword('');
                    setError(err.message);
                });
        }
    }

    function handleChangeName(e) { setName(e.target.value); }
    function handleChangeEmailAddress(e) { setEmailAddress(e.target.value); }
    function handleChangePassword(e) { setPassword(e.target.value); }
    function handleChangePasswordConfirm(e) { setPasswordConfirm(e.target.value); }

    return (
        <div className='h-4/5 mb-10 px-60 max-w-5xl w-full mx-auto text-white'>
            <div className='h-4/5 px-20 pt-10 bg-black bg-opacity-70 flex flex-col items-start hover:bg-opacity-100'>
                <h3 className='text-3xl font-semibold mb-6'>Sign Up</h3>
                {error && <h1>{error}</h1>}
                <div className='w-full'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            value={name}
                            onChange={handleChangeName}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            value={emailAddress}
                            onChange={handleChangeEmailAddress}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <input
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={handleChangePassword}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <input
                            type='password'
                            placeholder='Repeat your password'
                            value={passwordConfirm}
                            onChange={handleChangePasswordConfirm}
                            className='mb-4 p-4 rounded bg-gray-700'
                        />
                        <button type='submit' className='mb-4 p-3 rounded bg-red-600 font-bold text-xl'>
                            Sign Up
                        </button>
                    </form>
                    <SignUpWithSocials />
                </div>
                <p className='mb-4 text-gray-500 text-lg'>
                    Already have an account?
                    {' '}
                    <Link to={ROUTES.SIGN_IN} className='text-white hover:underline'>Sign in now</Link>
                </p>
                <p className='mb-4 text-gray-500 text-sm'>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot.
                    Learn more.
                </p>
            </div>

        </div>
    );
};

export default SignUpForm;
