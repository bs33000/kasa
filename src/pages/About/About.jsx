import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapsible from "../../components/Collapsible/Collapsible";
import aboutContent from "../../assets/content/aboutContent.json"; // j'ai créé un fichier JSON avec les données des collapses
import React from "react";

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutContent.map((rule, id) => (
				<Collapsible
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
