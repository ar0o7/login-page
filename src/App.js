import "./App.css";
import LoginPage from "./components/login-page/Loginpage";
import LandingPage from "./components/Landing-page/Landingpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
