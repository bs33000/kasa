import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import fetchAllProducts from "../../Data/fetchAllProducts";

export default function Home() {
	const accomodationData = fetchAllProducts(); // here, we are using a file, to be replacec by async function
 	// const data = await fetchAllProducts(); //when Data will be coming from API call
	
	return (
		<>
			<Banner />
			<div className="cards-container">
				{accomodationData.map((housing) => (
					<div className="card_accomodation" key={housing.id}>
						<Link className="link_card_accomodation" to={`/accomodation/${housing.id}`}>
							<Card cover={housing.cover} title={housing.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
