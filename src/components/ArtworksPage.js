import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { artworkStore, artworkCarouselResponsive } from "../utilities/Helper";

const ArtworksPage = ({ maxWidthViewport }) => {
	return (
		<div class="h-screen bg-eerie-black flex flex-col items-center justify-center">
			<div class="tracking-wider leading-10 font-bold text-40 py-5 text-center text-white">
				My Artworks
			</div>
			<div class={`${maxWidthViewport <= 1024 ? "w-11/12 " : "w-8/12 pt-5"}`}>
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
	);
};

export default ArtworksPage;
