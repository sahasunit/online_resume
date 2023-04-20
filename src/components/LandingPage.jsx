import React from "react";
import background from "../images/landingBackground.png";
import AnimatedText from "react-animated-text-content";

const LandingPage = () => {
	return (
		<div className="w-full h-screen">
			<img
				className="top-0 left-0 w-full h-screen object-cover"
				src={background}
			></img>
			<div className="absolute top-0 left-0 w-full h-screen flex flex-col">
				<div className="md:text-16 max-w-[1980px] m-auto absolute p-5 text-10 font-normal tracking-widest text-white">
					DEVELOPED BY SUNIT SAHA
				</div>
				<div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
					<div className="text-center">
						<AnimatedText
							type="chars" // animate words or chars
							animationType="lights"
							interval={0.1}
							duration={0.4}
							tag="h3"
							className="lg:text-80 max-w-[1980px] text-35 font-bold tracking-wider text-white"
							includeWhiteSpaces
						>
							Software Engineer
						</AnimatedText>
						;
						<AnimatedText
							type="chars" // animate words or chars
							animationType="lights"
							interval={0.2}
							duration={0.6}
							tag="h3"
							className="lg:text-60 max-w-[1980px] text-26 font-normal tracking-wider text-white"
							includeWhiteSpaces
						>
							SUNIT SAHA
						</AnimatedText>
						;
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
