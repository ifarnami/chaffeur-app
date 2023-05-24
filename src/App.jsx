import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Fleet from "./Components/Fleet/Fleet";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Info/Info";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Info />
    </div>
  );
}

export default App;
