import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
