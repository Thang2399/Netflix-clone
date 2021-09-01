/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from "react";

// icons
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

// Components: children
import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
} from "./styles/accordion";

const ShowContext = createContext();

const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
};

export default Accordion;

// Accordion.Inner = function AccordionInner({ children, ...restProps }) {
// 	return <Inner {...restProps}>{children}</Inner>;
// };

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [show, setShow] = useState(false);

	return (
		<ShowContext.Provider value={{ show, setShow }}>
			<Item {...restProps}>{children}</Item>
		</ShowContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { show, setShow } = useContext(ShowContext);

	return (
		<Header onClick={() => setShow((show) => !show)} {...restProps}>
			{children}
			{/* <pre>{JSON.stringify(show, null, 2)}</pre> */}
			{show ? <AiOutlineClose /> : <AiOutlinePlus />}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { show } = useContext(ShowContext);

	return (
		<Body className={show ? "open" : "closed"} {...restProps}>
			<span>{children}</span>
		</Body>
	);
};
