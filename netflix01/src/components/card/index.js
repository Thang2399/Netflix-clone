/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";

// Children
import {
	Container,
	Title,
	Group,
	SubTitle,
	Text,
	Entities,
	Meta,
	Image,
	Item,
	FeatureText,
	FeatureClose,
	Feature,
	FeatureTitle,
	Content,
	Maturity,
} from "./styles/card";

// Icon
import { AiOutlineCloseCircle } from "react-icons/ai";

export const FeatureContext = React.createContext();

const Card = ({ children, ...restProps }) => {
	const [showFeature, setShowFeature] = useState(false);

	const [itemFeature, setItemFeature] = useState({});
	console.log("This is item feature", itemFeature);

	return (
		<FeatureContext.Provider
			value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	);
};

Card.Group = function CardGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
	return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
	return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
	const { setShowFeature, setItemFeature } = useContext(FeatureContext);

	const handleClick = () => {
		setItemFeature(item);
		setShowFeature((showFeature) => !showFeature);
	};

	return (
		<Item onClick={() => handleClick()} {...restProps}>
			{children}
		</Item>
	);
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
	const { showFeature, itemFeature, setShowFeature } =
		useContext(FeatureContext);

	console.log(typeof itemFeature.genre);

	return showFeature ? (
		<Feature
			{...restProps}
			src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.title}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<AiOutlineCloseCircle fontWeight='bold' fontSize='20px' />
				</FeatureClose>

				<Group margin='30px 0' flexDirection='row' alignItems='center'>
					<Maturity rating={itemFeature.maturity}>
						{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
					</Maturity>
					<FeatureText fontWeight='bold'>
						{itemFeature.genre.charAt(0).toUpperCase() +
							itemFeature.genre.slice(1)}
					</FeatureText>
				</Group>
				{children}
			</Content>
		</Feature>
	) : null;
};

Card.Image = function CardImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Card;
