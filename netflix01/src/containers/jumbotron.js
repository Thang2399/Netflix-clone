import React from "react";

// component
import Jumbotron from "../components/jumbotron";

// data
import JumbotronData from "../fixtures/jumbo.json";
function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{JumbotronData.map((item) => {
				return (
					<Jumbotron key={item.id} direction={item.direction}>
						<Jumbotron.Pane>
							<Jumbotron.Title>{item.title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Pane>
						<Jumbotron.Pane>
							<Jumbotron.Image src={item.image} alt={item.title} />
						</Jumbotron.Pane>
					</Jumbotron>
				);
			})}
		</Jumbotron.Container>
	);
}

export default JumbotronContainer;
