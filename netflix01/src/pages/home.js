import React from "react";

// Components
import HeaderContainer from "../containers/header";
import Jumbotron from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import OptionForm from "../components/option-form";
import Feature from "../components/features";
const Home = () => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programmes and more.
					</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time.
					</Feature.SubTitle>
					<OptionForm>
						<OptionForm.Input placeholder='Email Address' />
						<OptionForm.Button>Try it now</OptionForm.Button>
						<OptionForm.Break />
						<OptionForm.Text>
							Ready to watch? Enter your email to create or restart your
							membership.
						</OptionForm.Text>
					</OptionForm>
				</Feature>
			</HeaderContainer>

			<Jumbotron />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
