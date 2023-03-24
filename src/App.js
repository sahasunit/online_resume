import React, { useState, useEffect } from "react";
import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import WorkExperience from "./components/WorkExperiencePage";
import Footer from "./components/Footer";
import TechUsed from "./components/TechUsed";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
	const [maxWidthViewport, setWindowWidth] = useState(0);
	const [maxHeightViewport, setWindowHeight] = useState(0);
	useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const updateDimensions = () => {
		const maxWidthViewport = window.innerWidth;
		const maxHeightViewport = window.innerHeight;
		setWindowWidth(maxWidthViewport);
		setWindowHeight(maxHeightViewport);
	};

	const Fullpage = () => (
		<ReactFullpage
			//fullpage options
			scrollingSpeed={1000} /* Options here */
			// render={({ state, fullpageApi }) => {
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<LandingPage
								maxWidthViewport={maxWidthViewport}
								maxHeightViewport={maxHeightViewport}
							/>
							{/* <button onClick={() => fullpageApi.moveSectionDown()}>
								Click me to move down
							</button> */}
						</div>
						<div className="section">
							<FeaturePage maxWidthViewport={maxWidthViewport} />
						</div>
						<div className="section">
							<WorkExperience maxWidthViewport={maxWidthViewport} />
						</div>
						<div className="section">
							<TechUsed maxWidthViewport={maxWidthViewport} />
						</div>
						<div className="section">
							<Footer maxWidthViewport={maxWidthViewport} />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);

	return (
		<div className="App">
			<Fullpage />
		</div>
	);
};

export default App;
