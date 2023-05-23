import "./Hero.css";
import suv from "../../assets/suv-hero.png";
import vector from "../../assets/svg-hero.svg";
import rectangle from "../../assets/rectangle-hero.png";

function Hero() {
  return (
    <div className="container">
      <nav className="navbar flex-center-between">
        <a className="navbar--brand lora-700 margin-left-7" href="#1">
          Lux<span className="lora-400-italic">Chaffeur</span>
        </a>
        <ul className="navbar--links noto-sans-400 margin-right-7 flex-center-between">
          <li>
            <a className="navbar--links__link" href="#1">
              Home
            </a>
          </li>
          <li>
            <a className="navbar--links__link" href="#1">
              About
            </a>
          </li>
          <li>
            <a className="navbar--links__link" href="#1">
              Services
            </a>
          </li>
          <li>
            <a className="navbar--links__link" href="#1">
              Fleet
            </a>
          </li>
          <li>
            <a className="navbar--links__link" href="#1">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <main className="hero flex-center-between">
        <div className="hero--content margin-left-7 flex-center-center">
          <img className="hero--content__img" src={rectangle} alt="rectangle" />
          <h1 className="hero--content__header">
            Premium <br /> and Luxurious <br /> Chauffer <br /> Services
          </h1>
        </div>

        <div className="hero--media flex-center-center margin-right-7">
          <img className="hero--media__img" src={suv} alt="suv" />
          <img className="hero--media__svg" src={vector} alt="vector" />
        </div>
      </main>
    </div>
  );
}

export default Hero;
