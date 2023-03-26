import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import buddhaPainting from "../images/artworks/buddha.png";
import ganeshPainting from "../images/artworks/ganesh.png";
import ladyPainting from "../images/artworks/lady.png";
import lionsPainting from "../images/artworks/lions.png";
import sunsetPainting from "../images/artworks/sunset.png";

const ArtworksPage = ({ maxWidthViewport }) => {
	console.log({ maxWidthViewport });

	const artworkWrapperStyle = "flex flex-col items-center h-full w-full";

	const artworkStore = [
		<div class={artworkWrapperStyle}>
			<img src={buddhaPainting} alt="Buddha Painting" />
		</div>,
		<div class={artworkWrapperStyle}>
			<img src={ganeshPainting} alt="Ganesh Painting" />
		</div>,
		<div class={artworkWrapperStyle}>
			<img src={ladyPainting} alt="Lady Painting" />
		</div>,
		<div class={artworkWrapperStyle}>
			<img src={lionsPainting} alt="Lions Painting" />
		</div>,
		<div class={artworkWrapperStyle}>
			<img src={sunsetPainting} alt="Sunset Painting" />
		</div>,
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 2,
		},
		others: {
			breakpoint: { max: 3000, min: 0 },
			items: 1,
		},
	};

	return (
		<div class="max-h-1280 bg-white flex flex-col items-center justify-center">
			<div class="tracking-wider leading-10 font-bold text-40 py-10 text-center">
				My Artworks
			</div>
			<div class={`${maxWidthViewport <= 1024 ? "w-11/12 " : "w-8/12 pb-10"}`}>
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
					transitionDuration={1000}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px px-2"
					arrows={false}
					customTransition="transform 500ms ease-in-out"
				>
					{artworkStore.map((artwork) => artwork)}
				</Carousel>
			</div>
		</div>
	);
};

export default ArtworksPage;
