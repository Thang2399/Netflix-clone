import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './app';
import './assets/libs/tailwind.css';
// Firebase
import FirebaseContext from './context/firebase';
import firebase from './assets/libs/firebase.prod';

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
