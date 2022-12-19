import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import accomodationData from "../../assets/accomodation/logements.json";

export default function Home() {

	return (
		<>
			<Banner />
			<div className="cards-container">
				{accomodationData.map((housing, id) => (
					<div className="card_accomodation" key={id}>
						<Link className="link_card_accomodation" to={`/accomodation/${housing.id}`}>
							<Card cover={housing.cover} title={housing.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
