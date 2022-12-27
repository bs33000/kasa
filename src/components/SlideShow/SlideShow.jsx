import React, { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

export default function SlideShow({ slides }) {
	const [current, setCurrent] = useState(0); // recall that slides is an array, starting index=0
	const length = slides.length;

	if (length ===0) { //if no picture
	slides = ["https://github.com/bs33000/kasa/blob/master/src/assets/images/LOGO.png"]
	}

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // since slides is an array, the last element number is lenght-1
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // if back to 0 (ie first pic) then go to the end 
	};

	return (
		<section id="slideshow-container"> 
			{length > 1 && ( //display arrows only when length > 1
				<img
					src={left}
					alt="left"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="right"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim" 
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="accomodation" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
