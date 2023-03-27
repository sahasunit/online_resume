import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { techStackImgs, responsive } from "../utilities/Helper";

const TechUsed = ({ maxWidthViewport }) => {
	return (
		<div class="h-screen bg-light-grey flex flex-col items-center justify-center">
			<div class="tracking-wider leading-10 font-bold text-40 py-10 text-center">
				Tech & Skill Expertise
			</div>
			<div class={`${maxWidthViewport <= 1024 ? "w-11/12 " : "w-7/12"}`}>
				<Carousel
					swipeable={false}
					draggable={true}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={800}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-20-px px-2"
					arrows={false}
					customTransition="transform 300ms ease-in-out"
				>
					{techStackImgs.map((pic) => pic)}
				</Carousel>
			</div>
		</div>
	);
};

export default TechUsed;
