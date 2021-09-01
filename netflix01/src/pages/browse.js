import React from "react";

// Custom hook to get the films or series from firebase
import useContent from "../hooks/use-content";

// Filter genre
import selectionFilter from "../utils/selection-filter";

// Component
import BrowseContainer from "../containers/browse";

const Browse = () => {
	// series and films displayed in the slides
	const { series } = useContent("series");
	const { films } = useContent("films");

	const slides = selectionFilter({ series, films });
	// console.log(slides);
	return <BrowseContainer slides={slides} />;
};

export default Browse;
