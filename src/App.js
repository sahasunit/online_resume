import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import WorkExperience from "./components/WorkExperience";
import background from "./images/second_landing_background.png";

const App = () => {
	return (
		<div className="App">
			<div>
				<LandingPage />
			</div>
			<div>
				<FeaturePage />
			</div>
      {/* <div>
				<WorkExperience />
			</div> */}
		</div>
	);
};

export default App;
