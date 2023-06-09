import "./Navbar.css";
import burger from "../../assets/burger-menu.svg";

function Navbar() {
  return (
    <nav className="navbar flex-center-between">
      <a className="navbar--brand lora-700 margin-left-7" href="#1">
        Lux<span className="lora-400-italic">Chaffeur</span>
      </a>
      <ul className="navbar--links noto-sans-400 margin-right-7 flex-center-between">
        <li>
          <a className="navbar--links__link" href="#hero-page">
            Home
          </a>
        </li>
        <li>
          <a className="navbar--links__link" href="#about-page">
            About
          </a>
        </li>
        <li>
          <a className="navbar--links__link" href="#services-page">
            Services
          </a>
        </li>
        <li>
          <a className="navbar--links__link" href="#fleet-page">
            Fleet
          </a>
        </li>
        <li>
          <a className="navbar--links__link" href="#contact">
            Contact Us
          </a>
        </li>
      </ul>
      <img className="navbar--menu" src={burger} alt="menu" />
    </nav>
  );
}

export default Navbar;
