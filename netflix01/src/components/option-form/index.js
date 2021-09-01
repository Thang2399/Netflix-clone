/* eslint-disable react/prop-types */
import React from "react";

// Children
import { Container, Input, Break, Button, Text } from "./styles.js/option-form";

// Icon
import { AiOutlineRight } from "react-icons/ai";

const OptionForm = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

OptionForm.Input = function OptionFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

OptionForm.Button = function OptionFormButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}
			<span>
				<AiOutlineRight />
			</span>
		</Button>
	);
};

OptionForm.Text = function OptionFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

OptionForm.Break = function OptionFormBreak({ ...restProps }) {
	return <Break {...restProps} />;
};

export default OptionForm;
