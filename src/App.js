import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/navBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
    </div>
  );
}

export default App;
