import React from "react";
import background from "../images/landingBackground.png";
import AnimatedText from "react-animated-text-content";

const LandingPage = ({ maxWidthViewport }) => {
	return (
		<div class="h-screen">
			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "100%",
				}}
			>
				<div class="h-full flex flex-col">
					<div
						class={`${
							maxWidthViewport <= 464 ? "pt-2 px-2 text-10" : "p-5 text-16"
						} font-normal tracking-widest text-white`}
					>
						DEVELOPED BY SUNIT SAHA
					</div>
					<div class="h-full flex flex-col items-center justify-center">
						<div class="text-center">
							<AnimatedText
								type="chars" // animate words or chars
								animationType="lights"
								interval={0.1}
								duration={0.4}
								tag="h3"
								className={`${
									maxWidthViewport < 464 ? "text-35" : "text-80"
								} font-bold tracking-wider text-white`}
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
								className={`${
									maxWidthViewport < 464 ? "text-26" : "text-60"
								} font-normal tracking-wider text-white`}
								includeWhiteSpaces
							>
								SUNIT SAHA
							</AnimatedText>
							;
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
