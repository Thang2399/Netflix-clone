import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// eslint-disable-next-line no-unused-vars
import { seedDatabase } from "../seed";

// we need to seed the database

// then config
const config = {
	apiKey: "AIzaSyDTFDJctOhR_VdAqRKUt5FEx4UYDlbpt8s",
	authDomain: "netflix-clone01-11b13.firebaseapp.com",
	projectId: "netflix-clone01-11b13",
	storageBucket: "netflix-clone01-11b13.appspot.com",
	messagingSenderId: "241753852007",
	appId: "1:241753852007:web:704ea2769887c253406cc2",
	measurementId: "G-WPTZ9GRQBN",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
