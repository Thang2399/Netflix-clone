/* eslint-disable react/prop-types */
import React from "react";

// Children
import { Container, Title, SubTitle } from "./styles/features";
const Feature = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
