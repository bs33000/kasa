import React from "react";
export default function Card({ cover, title }) {
	return (
		<article className="card-accomodation">
			<img src={cover} alt="location" />
			<div className="card-accomodation__layer">
				<p className="card-accomodation__title">{title}</p>
			</div>
		</article>
	);
}