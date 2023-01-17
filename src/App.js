import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import WorkExperience from "./components/WorkExperience";
import TechUsed from "./components/TechUsed";
import background from "./images/second_landing_background.png";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
	const Fullpage = () => (
		<ReactFullpage
			//fullpage options
			scrollingSpeed={1000} /* Options here */
			// render={({ state, fullpageApi }) => {
			render={() => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<LandingPage />
							{/* <button onClick={() => fullpageApi.moveSectionDown()}>
								Click me to move down
							</button> */}
						</div>
						<div className="section">
							<FeaturePage />
						</div>
						<div className="section">
							<WorkExperience />
						</div>
						<div className="section">
							<TechUsed />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);

	return (
		<div className="App">
			{/* <div>
				<LandingPage />
			</div>
			<div>
				<FeaturePage />
			</div>
			<div>
				<WorkExperience />
			</div>
			<div>
				<TechUsed />
			</div> */}
			<Fullpage />
		</div>
	);
};

export default App;
