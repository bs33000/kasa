import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Collapsible from "../../components/Collapsible/Collapsible";
import Host from "../../components/Host/Host";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import SlideShow from "../../components/SlideShow/SlideShow";
import fetchAllProducts from "../../Data/fetchAllProducts";


export default function Accomodation() {
	const accomodationData = fetchAllProducts(); // here, we are using a file, to be replacec by async function
	// const accomodationData = await fetchAllProducts(); //when Data will be coming from API call
	const params = useParams();
	const housing = accomodationData.find(({ id }) => id === params.id);
	if (housing === undefined) return <Navigate to="/404" />;

	const slidePics = housing.pictures;
	const tags = housing.tags;
	const equipments = housing.equipments;
	const equip = equipments.map((item, index) =>
			(
				<li key={index} className="equipList">
					{item}
				</li>
			));

	return (
			(
			<div key={params.id} className="info-container">
				<SlideShow slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{housing.title}</h1>
							<h3>{housing.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>

					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={housing.host.name}
								hostPic={housing.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Rating score={housing.rating} />
						</div>
					</div>
				</section>

				<div className="collapse-info-container">
					<Collapsible aboutTitle="Description" aboutText={housing.description} />
					<Collapsible aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
