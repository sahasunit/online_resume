import React from "react";
import KeepInTouch from "../images/keepInTouch.png";

const Footer = () => {
	return (
		<div className="md:min-h-screen max-sm:py-8 w-full bg-flame">
			<div className="top-0 left-0 w-full md:min-h-screen flex flex-col justify-center items-center relative">
				<p className="text-40 font-bold tracking-wide text-center text-floral-white py-8">
					Let's work together.
				</p>
				<div className="relative top-0 left-0 lg:justify-center max-w-[1400px] lg:flex-row flex flex-col items-center">
					<img
						className="rounded-full lg:max-w-[40%] max-w-[50%] relative"
						src={KeepInTouch}
						alt="Keep in touch."
					/>
					<div className="relative lg:max-w-[50%] w-full lg:pl-5">
						<p className="text-center text-white text-26 font-bold p-5">
							Get in touch to grab a coffee? Beer?
						</p>
						<div className="flex justify-center items-center tracking-wide pb-6 px-2">
							<p className="text-center text-floral-white text-14 md:text-20">
								If you have a project that you're struggling to complete or a
								goal that you've been unable to achieve, I would be happy to
								help. Please feel free to reach out to me at
								<span> </span>
								<span className="font-bold">sahasunit05@gmail.com</span>. I'm
								always happy to chat about how to bring your ideas to life, or
								share some valuable insights with advice on the path to success.
								Let's collaborate and make magic happen!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
