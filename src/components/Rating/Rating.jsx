import React from "react";
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

export default function Rating({ score }) {
    // transform score into a number of full star
	const possibleScore = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{possibleScore.map((value) =>
                // display a full star ie score is above current possibleScore value
				score >= value ? (
					<img
						key={value.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( // otherwise display an empty star
					<img
						key={value.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}