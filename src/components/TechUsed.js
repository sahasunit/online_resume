import React, { useEffect, useState } from "react";
import confluence from "../images/tech_logos/confluence.png";
import cplusplus from "../images/tech_logos/cplusplus.png";
import figmaLogo from "../images/tech_logos/figma.png";
import java from "../images/tech_logos/java.png";
import javascript from "../images/tech_logos/javascript.png";
import jira from "../images/tech_logos/jira.png";
import linux from "../images/tech_logos/linux.png";
import python from "../images/tech_logos/python.png";
import react from "../images/tech_logos/react.png";
import redux from "../images/tech_logos/redux.png";
import restApi from "../images/tech_logos/restApi.png";
import typescript from "../images/tech_logos/typescript.png";
import nodejs from "../images/tech_logos/nodejs.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TechUsed = ({ maxWidthViewport }) => {
	console.log({ maxWidthViewport });

	const techImgOuterWrapperStyle =
		"flex flex-col items-center h-full w-full bg-white p-5";
	const techImgInnerWrapperStyle =
		"w-full h-full text-center font-bold px-10 text-26 text-black tracking-wide";

	const techStackImgs = [
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>R E A C T</div>
			<img class="" width="600" src={react} alt="React" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>T Y P E S C R I P T</div>
			<img width="600" src={typescript} alt="Typescript" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>J A V A S C R I P T</div>
			<img width="600" src={javascript} alt="Javascript" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>J A V A</div>
			<img width="600" src={java} alt="Java" />
		</div>,

		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>N O D E J S </div>
			<img width="600" src={nodejs} alt="NodeJs" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>C + +</div>
			<img width="600" src={cplusplus} alt="C++" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>P Y T H O N</div>
			<img width="600" src={python} alt="Python" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>R E D U X</div>
			<img width="600" src={redux} alt="Redux" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>L I N U X</div>
			<img width="600" src={linux} alt="Linux" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>R E S T A P I</div>
			<img width="600" src={restApi} alt="Rest API" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>J I R A</div>
			<img width="600" src={jira} alt="Jira" />
		</div>,
		<div class={techImgOuterWrapperStyle}>
			<div class={techImgInnerWrapperStyle}>F I G M A</div>
			<img width="600" src={figmaLogo} alt="Figma" />
		</div>,
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
		},
		smallScreen: {
			breakpoint: { max: 1024, min: 0 },
			items: 1,
		},
	};

	return (
		<div class="h-screen bg-chrome-yellow flex flex-col items-center justify-center">
			<div class="tracking-wider leading-10 font-bold text-40 py-10 text-center text-white">
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
					itemClass="carousel-item-padding-20-px px-2 "
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
