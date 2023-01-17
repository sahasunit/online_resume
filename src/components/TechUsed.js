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
import { Carousel } from "3d-react-carousal";

const TechUsed = () => {
	const slides = [
		<div class="bg-white px-40 py-20">
			<img width="700" height="800" src={react} alt="React" />
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="800" src={typescript} alt="Typescript" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={java} alt="Java" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={javascript} alt="Javascript" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={cplusplus} alt="Cplusplus" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={python} alt="Python" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={redux} alt="Redux" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={linux} alt="Linux" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={restApi} alt="RestApi" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={jira} alt="Jira" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={confluence} alt="Confluence" />,
		</div>,
		<div class="bg-white p-10">
			<img width="700" height="200" src={figmaLogo} alt="FigmaLogo" />,
		</div>,
	];

	return (
		<div class="h-screen bg-pale-silver">
			<div class="tracking-wider leading-4 font-bold text-60 pt-20 pb-20 text-center">
				Tech & Skill Expertise
			</div>
			<div class="">
				<Carousel slides={slides} autoplay={true} interval={1000} />
			</div>
		</div>
	);
};

export default TechUsed;
