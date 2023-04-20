import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { techStackImgs, responsive } from "../utilities/Helper";

const TechUsed = () => {
	return (
		<div className="md:min-h-screen w-full bg-light-grey py-6">
			<div className="relative md:min-h-screen top-0 left-0 w-full flex flex-col items-center justify-center">
				<div className="pb-10 sm:pb-6 tracking-wider leading-10 font-bold text-40 text-center">
					Tech & Skill Expertise
				</div>
				<div className="w-full sm:w-8/12">
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
						itemClass=" px-2"
						arrows={false}
						customTransition="transform 300ms ease-in-out"
					>
						{techStackImgs.map((pic) => pic)}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default TechUsed;
