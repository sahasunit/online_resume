import FeaturePage from "./components/FeaturePage";
import LandingPage from "./components/LandingPage";
import WorkExperience from "./components/WorkExperiencePage";
import TechExpertise from "./components/TechExpertisePage";
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
      <div>
				<WorkExperience />
			</div>
				{/* <TechExpertise /> */}
		</div>
	);
};

export default App;
