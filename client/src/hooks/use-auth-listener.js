import { useState, useEffect, useContext } from 'react';

// Firebase
import FirebaseContext from '../context/firebase';

const useAuthListener = () => {
    console.log('use auth listener');

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    console.log(user);

    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
                console.log('This is authUser', authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        // clean up
        return () => listener();
    }, [firebase, user]);

    return { user };
};

export default useAuthListener;
