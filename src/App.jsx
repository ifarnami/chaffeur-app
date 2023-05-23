import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Fleet from "./Components/Fleet/Fleet";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
    </div>
  );
}

export default App;
