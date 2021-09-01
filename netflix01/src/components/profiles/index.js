/* eslint-disable react/prop-types */
import React from "react";

// Children
import { Container, Title, List, Name, Picture, Item } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
	return (
		<Picture
			{...restProps}
			src={src ? `./images/users/${src}.png` : "/images/misc/loading.gif"}
			alt='User-image'
		/>
	);
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
