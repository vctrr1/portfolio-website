import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <div className="footer">
        <p>&copy; 2025 vctrr. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
