import React from "react";

import buddhaPainting from "../images/artworks/buddha.png";
import ganeshPainting from "../images/artworks/ganesh.png";
import ladyPainting from "../images/artworks/lady.png";
import lionsPainting from "../images/artworks/lions.png";
import sunsetPainting from "../images/artworks/sunset.png";

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

const artworkWrapperStyle =
	"flex flex-col items-center justify-center h-full w-auto shadow-lg";
const techImgOuterWrapperStyle =
	"flex flex-col items-center justify-center h-full w-full bg-white p-5";
const techImgInnerWrapperStyle =
	"w-full h-full text-center font-bold px-10 text-26 text-black tracking-wide";

export const artworkStore = ({ maxWidthViewport }) => [
	<div class={artworkWrapperStyle} id={1}>
		<img
			width={`${maxWidthViewport >= 1024 ? maxWidthViewport / 2.5 : ""}`}
			src={buddhaPainting}
			alt="Buddha Painting"
		/>
	</div>,
	<div class={artworkWrapperStyle} id={2}>
		<img
			width={`${maxWidthViewport >= 1024 ? maxWidthViewport / 2.5 : ""}`}
			src={ganeshPainting}
			alt="Ganesh Painting"
		/>
	</div>,
	<div class={artworkWrapperStyle} id={3}>
		<img
			width={`${maxWidthViewport >= 1024 ? maxWidthViewport / 2.5 : ""}`}
			src={ladyPainting}
			alt="Lady Painting"
		/>
	</div>,
	<div class={artworkWrapperStyle} id={4}>
		<img
			width={`${maxWidthViewport >= 1024 ? maxWidthViewport / 2.5 : ""}`}
			src={lionsPainting}
			alt="Lions Painting"
		/>
	</div>,
	<div class={artworkWrapperStyle} id={5}>
		<img
			width={`${maxWidthViewport >= 1024 ? maxWidthViewport / 2.5 : ""}`}
			src={sunsetPainting}
			alt="Sunset Painting"
		/>
	</div>,
];

export const techStackImgs = [
	<div class={techImgOuterWrapperStyle}>
		<div class={techImgInnerWrapperStyle}>R E A C T</div>
		<img width="600" src={react} alt="React" />
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

export const companies = [
	{
		company: "LBT Innovations",
		position: "Software Engineer",
		workingPeriod: "September 2022 - March 2023",
	},
	{
		company: "Software Risk",
		position: "Software Engineer",
		workingPeriod: "November 2021 - August 2022",
	},
	{
		company: "University of Adelaide",
		position: "Software Engineering and Project Tutor",
		workingPeriod: "July 2021 - December 2021",
	},
	{
		company: "Pearler ",
		position: "Software Engineer",
		workingPeriod: "September 2020 - October 2021",
	},
	{
		company: "Dassault Systèmes",
		position: "Systems Engineering Intern",
		workingPeriod: "December 2019 - February 2020",
	},
	{
		company: "Information Technology and Digital Services",
		position: "Client Computing Intern",
		workingPeriod: "August 2019 - October 2019",
	},
	{
		company: "Kumon Australia & New Zealand",
		position: "Teaching Assistant",
		workingPeriod: "May 2019 - July 2019",
	},
];

export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
	},
};

export const artworkCarouselResponsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2,
	},
	others: {
		breakpoint: { max: 3000, min: 0 },
		items: 1,
	},
};
