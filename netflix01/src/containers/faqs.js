import React from "react";

// Data
import faqsData from "../fixtures/faqs.json";

// Components
import Accordion from "../components/accordion";
import OptionForm from "../components/option-form";

const FaqsContainer = () => {
	return (
		// Accordion == Inner
		<Accordion>
			{/* Title, Frame, Item, Header, Body === children */}
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((item) => {
					return (
						<Accordion.Item key={item.id}>
							<Accordion.Header>{item.header}</Accordion.Header>
							<Accordion.Body>{item.body}</Accordion.Body>
						</Accordion.Item>
					);
				})}
			</Accordion.Frame>

			<OptionForm>
				<OptionForm.Input placeholder='Email Address' />
				<OptionForm.Button>Try it now</OptionForm.Button>
				<OptionForm.Break />
				<OptionForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptionForm.Text>
			</OptionForm>
		</Accordion>
	);
};

export default FaqsContainer;
