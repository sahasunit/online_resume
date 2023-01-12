import React, { useEffect, useState } from "react";
import background from "../images/third_landing_background.png";
import AnimatedText from 'react-animated-text-content';

const LandingPage = () => {
	return (
		<div
			class="bg-cover h-screen"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div class="font-normal tracking-wide leading-5 text-white p-5 text-12">
				DEVELOPED BY SUNIT SAHA
			</div>
			<div class="h-screen flex flex-col justify-center">
				<div class="text-center">
					{/* <h1 class="font-bold tracking-wider leading-7 text-white p-10 text-60">
						Software Engineer
					</h1> */}
					{/* <h3 class="font-normal tracking-wide leading-5 text-white py-4 text-40">
						SUNIT SAHA
					</h3> */}
					<AnimatedText
						type="chars" // animate words or chars
						animationType="lights"
						interval={0.1}
						duration={0.4}
						tag="h3"
						className="font-bold tracking-wider leading-7 text-white p-10 text-60"
						includeWhiteSpaces
						>
							Software Engineer
					</AnimatedText>;
					<AnimatedText
						type="chars" // animate words or chars
						animationType="lights"
						interval={0.2}
						duration={0.6}
						tag="h3"
						className="font-normal tracking-wide leading-5 text-white py-4 text-40"
						includeWhiteSpaces
						>
							SUNIT SAHA
					</AnimatedText>;
				</div>
				<div class="text-center pt-14">
					<button class="border text-white py-2 px-8 text-18">About Me</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
