import React from "react";
import { TypeAnimation } from "react-type-animation";
import sunitPic from "../images/sunitsPic.png";

const AboutMe = () => {
	return (
		<div className="w-full bg-floral-white md:min-h-screen max-sm:py-8">
			<div className="top-0 left-0 w-full md:min-h-screen flex flex-col justify-center items-center">
				<div className="lg:text-40 text-40 text-center font-bold text-black pb-10">
					About Me
				</div>
				<div className="relative top-0 left-0 lg:justify-center max-w-[1400px] lg:flex-row flex flex-col items-center">
					<img
						src={sunitPic}
						alt="Sunit's profile picture"
						className={`lg:max-w-[30%] max-w-[50%] relative`}
					/>
					<div className="relative lg:max-w-[60%] max-w-[80%] lg:pl-5 flex flex-col pt-5 items-center lg:items-start">
						<h1 className="font-bold leading-3 text-black text-20 pb-2">
							My name is Sunit Saha.
						</h1>
						<div className="py-2 max-sm:flex max-sm:h-[8rem] w-[70%] md:w-full text-center lg:text-left">
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
									"I’m interested in F1 🏎️",
									750,
									() => {
										console.log("Done typing!"); // Place optional callbacks anywhere in the array
									},
								]}
								wrapper="div"
								cursor={false}
								repeat={Infinity}
								className={"lg:text-40 text-30"}
								speed={60}
							/>
						</div>
						<div className="lg:text-16 text-black tracking-wider leading-5 text-14 sm:pb-12">
							<p className="py-2" align="justify">
								I have nearly three years of experience working as a software
								engineer, with a focus on React, Java, TypeScript, JavaScript
								and NodeJs. As a dynamic and detail-oriented engineer, I excel
								at conceptualizing and delivering elegant, user-friendly
								solutions that are both effective and efficient. My work in
								various industries, from SaaS to Biotech, has honed my ability
								to collaborate effectively with cross-functional teams.
							</p>
							<p className="py-2" align="justify">
								But let's talk about the important stuff!
							</p>
							<p className="py-2" align="justify">
								When I'm not hard at work, I'm probably at the gym, pumping iron
								and dreaming of a six-pack (of abs, not beer). Or maybe I'm
								bopping along to some Afro or Hip Hop beats, because music is my
								jam. When I'm feeling outdoorsy, I like to go on hikes and
								camping trips with my buds. Nature is my spirit animal, and I
								don't know about you, but I think trees have really good vibes
								🌳
							</p>
							<p className="py-2" align="justify">
								And if you want to be impressed, ask me about the time I lived
								in five different countries and spoke up to five languages.
								Multilingual software engineer by day, gym rat by night, and
								all-around good time. Ready to connect?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
