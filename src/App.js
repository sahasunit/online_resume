import React, { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import LandingPage from "./components/LandingPage";
import WorkExperience from "./components/WorkExperiencePage";
import Footer from "./components/Footer";
import TechUsed from "./components/TechUsed";
import ArtworksPage from "./components/ArtworksPage";

const App = () => {
	const [maxWidthViewport, setWindowWidth] = useState(0);
	useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const updateDimensions = () => {
		const maxWidthViewport = window.innerWidth;
		setWindowWidth(maxWidthViewport);
	};

	return (
		<div className="App">
			<div>
				<LandingPage />
			</div>
			<div>
				<AboutMe />
			</div>
			<div>
				<WorkExperience />
			</div>
			<div>
				<TechUsed />
			</div>
			<div>
				<ArtworksPage maxWidthViewport={maxWidthViewport} />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
