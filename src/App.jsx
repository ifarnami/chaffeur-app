import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Fleet from "./Components/Fleet/Fleet";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Fleet />
    </div>
  );
}

export default App;
