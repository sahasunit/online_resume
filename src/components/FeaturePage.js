import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import sunitPic from "../images/sunit_pic.png";

const FeaturePage = () => {
	return (
		<div class="h-screen flex flex-col justify-center px-40">
			<div class="text-40 text-center font-bold text-black p-8">About Me</div>
			<div class="flex">
				<img src={sunitPic} alt="Sunit's picture" width="300" height="100" />
				<div>
					<div>
						<h1 class="font-bold leading-3 text-black text-20 px-5 pb-2 pt-5">
							My name is Sunit Saha
						</h1>
					</div>
					<div class="px-5">
						<TypeAnimation
							sequence={[
								"I’m interested in Softwares.", // Types 'One'
								750, // Waits 750ms
								"I’m interested in Art.", // Deletes 'One' and types 'Two'
								750,
								"I’m interested in Music.", // Types 'Three' without deleting 'Two'
								750,
								"I’m interested in Cooking.",
								750,
								"I’m interested in F1.",
								750,
								() => {
									console.log("Done typing!"); // Place optional callbacks anywhere in the array
								},
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: "2.5em" }}
							speed={50}
						/>
					</div>
					<div>
						<p class="px-5 py-2 text-black font-normal tracking-wider  leading-4 text-14">
							Computer Science bachelor’s degree recipient with a background in
							Cyber Security and Web Design and Development. Dynamic and
							detailed-oriented Software Engineer with a knack of
							conceptualizing and delivering elegant, user-friendly solutions
							effectively and efficiently. Paired with strong technical skills
							and excellent interpersonal skills, enabling me to interact with a
							wide range of clients. Additionally, a socially active volunteer
							with a passion in cooking and exploring different flavours in
							music.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturePage;
