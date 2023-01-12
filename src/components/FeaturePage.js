import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import sunitPic from "../images/sunit_pic.png";

const FeaturePage = () => {
	return (
		<div class="flex flex-col px-40 py-20 w-screen bg-floral-white">
			<div class="text-40 text-center font-bold text-black pb-10">About Me</div>
			<div class="flex items-center">
				<img class="ml-10" src={sunitPic} alt="Sunit's picture" width="320" />
				<div class="flex flex-col">
					<h1 class="font-bold leading-3 text-black text-20 px-5 pb-2 pt-5">
						My name is Sunit Saha.
					</h1>
					<div class="px-4 w-auto">
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
							style={{ fontSize: "2.5em" }}
							speed={60}
						/>
					</div>
					<div class="w-10/12">
						<p class="px-5 py-2 text-black tracking-wider leading-4 text-14" align="justify">
							I have been working as a Software Engineer for nearly 3 years, mainly using React, TypeScript, JavaScript and Java. 
							Dynamic and detail-oriented engineer with a knack of conceptualizing and delivering elegant, user-friendly solutions effectively and efficiently.
							Worked in multiple industries ranging from SaaS companies to Biotech companies which have polished my skill sets in working with cross-functional teams.
						</p>
						<p class="px-5 py-2 text-black font-normal tracking-wider leading-4 text-14" align="justify">
							Enough about my work expertise, hey!
						</p>
						<p class="px-5 py-2 text-black font-normal tracking-wider leading-4 text-14" align="justify">
							I am an active gym-rat, pushing my physical strength as much as I work my brains throughout the day. 
							The passion and importance of music drives my day ranging from Afro, Hip Hop, Pop, Trap, Lofi and Desi.
							Additionally, I enjoy going out for hikes and camping trips with my mates because the love for nature is real. 🌴
						</p>
						<p class="px-5 py-2 text-black font-normal tracking-wider leading-4 text-14" align="justify">
							Oh also, I’ve lived in 5 different countries and can speak up to 5 languages. Get in touch and ask me about it!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturePage;
