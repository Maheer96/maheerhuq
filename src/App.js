import logo from "./logo.svg";
import "./App.css";

import { NavBar } from "./components/navBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
