/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";


// Fuse
import Fuse from "fuse.js";

// Components
import SelectProfileContainer from "./profiles";
import Loading from "../components/loading";
import Header from "../components/header";
import Card from "../components/card";
import FooterContainer from "../containers/footer";
import Player from "../components/player";

// Routes
import * as ROUTES from "../constants/routes";

// Firebase
import FirebaseContext from "../context/firebase";

// logo
import logo from "../logo.svg";

const BrowseContainer = ({ slides }) => {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [category, setCategory] = useState("series");
	const [slideRows, setSlideRows] = useState([]);

	// console.log("Slides", slides);
	// console.log("Slide Rows", slideRows);

	const { firebase } = useContext(FirebaseContext);

	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		// console.log("Profile", profile);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	useEffect(() => {
		setSlideRows(slides[category]);
	}, [slides, category]);

	useEffect(() => {
		const fuse = new Fuse(slideRows, {
			keys: ["data.description", "data.title", "data.genre"],
		});

		const result = fuse.search(searchTerm).map(({ item }) => item);

		if (slideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
			setSlideRows(result);
		} else {
			setSlideRows(slides[category]);
		}
	}, [searchTerm]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1' dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo} />
						<Header.TextLink
							active={category === "series" ? "true" : "false"}
							onClick={() => setCategory("series")}>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === "films" ? "true" : "false"}
							onClick={() => setCategory("films")}>
							Films
						</Header.TextLink>
					</Header.Group>

					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>

						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign out of Netflix
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears two
						masks -- the one he paints for his day job as a clown, and the guise
						he projects in a futile attempt to feel like he's part of the world
						around him.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>

			<Card.Group>
				{slideRows.map((slideItem) => {
					// console.log("Slide item", slideItem);
					return (
						<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
							<Card.Title>{slideItem.title}</Card.Title>
							<Card.Entities>
								{slideItem.data.map((item) => {
									return (
										<Card.Item key={item.docId} item={item}>
											<Card.Image
												src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
												alt={item.title}
											/>
											<Card.Meta>
												<Card.SubTitle>{item.title}</Card.SubTitle>
												<Card.Text>{item.description}</Card.Text>
											</Card.Meta>
										</Card.Item>
									);
								})}
							</Card.Entities>
							<Card.Feature category={category}>
								<Player>
									<Player.Button />
									<Player.Video src='/videos/bunny.mp4' />
								</Player>
							</Card.Feature>
						</Card>
					);
				})}
			</Card.Group>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer
			user={user}
			setProfile={setProfile}
			slides={slides}
		/>
	);
};

export default BrowseContainer;
