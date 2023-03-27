import React from "react";
import { TypeAnimation } from "react-type-animation";
import sunitPic from "../images/sunitsPic.png";

const AboutMe = ({ maxWidthViewport }) => {
	return (
		<div
			class={`${
				maxWidthViewport <= 464 ? "py-5" : "h-screen"
			} flex flex-col bg-floral-white justify-center items-center relative`}
		>
			<div class="text-40 text-center font-bold text-black pb-10">About Me</div>
			<div
				class={`${
					maxWidthViewport <= 1024
						? "flex flex-col items-center"
						: "flex justify-center items-center w-8/12"
				}`}
			>
				<img
					src={sunitPic}
					alt="Sunit's"
					width={`${
						maxWidthViewport <= 1024
							? maxWidthViewport / 2
							: maxWidthViewport / 4
					}`}
				/>
				<div
					class={`${
						maxWidthViewport <= 1024 ? "w-8/12 text-center" : "w-7/12 pl-5"
					} flex flex-col pt-5`}
				>
					<h1 class="font-bold leading-3 text-black text-20 pb-2">
						My name is Sunit Saha.
					</h1>
					<div class={`${maxWidthViewport <= 464 ? "py-2" : ""}`}>
						<TypeAnimation
							sequence={[
								"I’m interested in Softwares 💻", // Types 'One'
								750, // Waits 750ms
								"I’m interested in Art 🎨", // Deletes 'One' and types 'Two'
								750,
								"I’m interested in Music 🎼", // Types 'Three' without deleting 'Two'
								750,
								"I’m interested in Cooking 🥙",
								750,
								"I’m interested in F1🏎️",
								750,
								() => {
									console.log("Done typing!"); // Place optional callbacks anywhere in the array
								},
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{
								fontSize: `${maxWidthViewport <= 464 ? "1.6em" : "2.5em"}`,
							}}
							speed={60}
						/>
					</div>

					<div
						class={`${
							maxWidthViewport <= 464 ? "text-12" : "text-14"
						} text-black tracking-wider leading-4 text-14`}
					>
						<p class="py-2" align="justify">
							I have nearly three years of experience working as a software
							engineer, with a focus on React, TypeScript, JavaScript, and Java.
							As a dynamic and detail-oriented engineer, I excel at
							conceptualizing and delivering elegant, user-friendly solutions
							that are both effective and efficient. My work in various
							industries, from SaaS to Biotech, has honed my ability to
							collaborate effectively with cross-functional teams.
						</p>
						<p class="py-2" align="justify">
							But let's talk about the important stuff!
						</p>
						<p class="py-2" align="justify">
							When I'm not hard at work, I'm probably at the gym, pumping iron
							and dreaming of a six-pack (of abs, not beer). Or maybe I'm
							bopping along to some Afro or Hip Hop beats, because music is my
							jam. When I'm feeling outdoorsy, I like to go on hikes and camping
							trips with my buds. Nature is my spirit animal, and I don't know
							about you, but I think trees have really good vibes 🌳.
						</p>
						<p class="py-2" align="justify">
							And if you want to be impressed, ask me about the time I lived in
							five different countries and spoke up to five languages.
							Multilingual software engineer by day, gym rat by night, and
							all-around good time. Ready to connect?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
