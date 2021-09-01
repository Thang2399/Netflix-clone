/* eslint-disable react/prop-types */
import React from "react";

// Children
import { LockBody, Spinner, Picture, ReleaseBody } from "./styles/loading";

const Loading = ({ src, ...restProps }) => {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Picture src={`/images/users/${src}.png`} />
		</Spinner>
	);
};

Loading.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};

export default Loading;
