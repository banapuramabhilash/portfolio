import Lottie from "lottie-react";
import developerSkills from "./assets/lottie-animations/developer-skills.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="developer-skill-container">
          <Lottie animationData={developerSkills} />
        </div>
        <h2>B Abhilash Reddy</h2>
        <p>MEAN Stack Developer @ Araneus Solutions</p>
      </header>
    </div>
  );
}

export default App;
