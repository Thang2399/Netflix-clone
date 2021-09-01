import React from 'react';

// Components
import { HeaderButtons } from '../components/header/header';
import SignInForm from '../components/forms/sign-in-form';

// Css
import '../components/header/header.css';

const SignInPage = () => (
    <div className='header h-screen'>
        <HeaderButtons />
        <SignInForm />
    </div>
);

export default SignInPage;
