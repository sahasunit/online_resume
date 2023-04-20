import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { artworkStore, artworkCarouselResponsive } from "../utilities/Helper";

const ArtworksPage = ({ maxWidthViewport }) => {
	return (
		<div className="w-full md:min-h-screen bg-eerie-black py-6">
			<div className="relative top-0 left-0 w-full md:min-h-screen flex flex-col items-center justify-center">
				<div className="pb-10 sm:pb-6 tracking-wider leading-10 font-bold text-50 text-center text-white">
					My Artworks
				</div>
				<div className="w-11/12 md:w-8/12">
					<Carousel
						swipeable={false}
						draggable={true}
						showDots={true}
						responsive={artworkCarouselResponsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={800}
						customTransition="all .5"
						transitionDuration={1000}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px px-2"
						arrows={false}
						customTransition="transform 500ms ease-in-out"
					>
						{artworkStore({ maxWidthViewport }).map((artwork) => artwork)}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default ArtworksPage;
