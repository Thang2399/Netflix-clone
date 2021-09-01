import { useState, useEffect, useContext } from "react";

// Firebase
import FirebaseContext from "../context/firebase";

const useContent = (target) => {
	// target = films || series
	const [content, setContent] = useState([]);

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => {
					return { ...contentObj.data(), docId: contentObj.id };
				});

				setContent(allContent);
			})
			.catch((err) => console.log(err.message));
	}, []);

	return { [target]: content };
};

export default useContent;
