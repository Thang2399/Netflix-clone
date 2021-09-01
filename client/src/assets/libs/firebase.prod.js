import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import seedDatabase from '../../seed';

const config = {
    apiKey: 'AIzaSyBFtSsWwbFMxWsOljm7_d_eikI1khzmZ2E',
    authDomain: 'netflix-002.firebaseapp.com',
    projectId: 'netflix-002',
    storageBucket: 'netflix-002.appspot.com',
    messagingSenderId: '826216739161',
    appId: '1:826216739161:web:91a36c7571071b7ca7dc48'
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export default firebase;
