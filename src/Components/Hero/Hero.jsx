import "./Hero.css";
import suv from "../../assets/suv-hero.png";
import vector from "../../assets/svg-hero.svg";
import rectangle from "../../assets/rectangle-hero.png";

function Hero() {
  return (
    <div id="hero-page" className="container">
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
