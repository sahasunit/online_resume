import React from "react";
import KeepInTouch from "../images/keepInTouch.png";

const Footer = ({ maxWidthViewport }) => {
	return (
		<div class="bg-flame flex flex-col justify-center h-screen align-center relative">
			<div class="text-50 font-bold tracking-wide text-center text-floral-white">
				Let's work together.
			</div>
			<div
				className={`${
					maxWidthViewport <= 1024 ? "flex-col items-center pt-10" : "pt-10"
				} flex justify-center`}
			>
				<img
					class="rounded-full"
					src={KeepInTouch}
					alt="Keep in touch."
					width={`${maxWidthViewport <= 1024 ? "320" : "450"}`}
				/>
				<div class={`${maxWidthViewport <= 1024 ? "w-11/12" : ""}`}>
					<div className="text-center text-white text-24 font-bold p-5">
						Get in touch to grab a beer? Coffee?
					</div>
					<div className="flex justify-center items-center tracking-wide">
						<div className="text-center text-pale-silver text-16 p-2 w-462">
							If you have a project that's been haunting you like a poltergeist
							or a goal that's been eluding you like Waldo, drop me a line at
							<span className="font-bold text-white">
								{" "}
								sahasunit05@gmail.com
							</span>
							. I'm always happy to chat about how to bring your ideas to life,
							or share some words of wisdom on the path to success. Let's
							collaborate and make magic happen!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
