import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapsible from "../../components/Collapsible/Collapsible";
import aboutContent from "../../assets/content/aboutContent.json"; // json file with list of content
import React from "react";

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutContent.map((content) => (
				<Collapsible
					aboutTitle={content.aboutTitle}
					aboutText={content.aboutText}
				/>
			))}
		</>
	);
}
