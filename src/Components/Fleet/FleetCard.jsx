import "./FleetCard.css";
import seats from "../../assets/seat-fleet.svg";
import luggage from "../../assets/luggage-fleet.svg";

function FleetCard({ image, category, brand }) {
  return (
    <div className="fleetCard ">
      <img className="fleetCard--img" src={image} alt="car image" />
      <div className="fleetCard--content">
        <h4 className="fleetCard--content__header">{category}</h4>
        <p className="fleetCard--content__subHeader">{brand}</p>
        <p className="fleetCard--content__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          repellendus quisquam earum sunt autem laborum, mollitia officia
          dolorum reiciendis. Harum, fugiat.
        </p>
      </div>
      <div className="fleetCard--icons flex-center-between">
        <div className="fleetCard--icons__icon">
          <img src={seats} alt="seats icon" />
          <p>4 Seats</p>
        </div>
        <div className="fleetCard--icons__icon">
          <img src={luggage} alt="luggage icon" />
          <p>2 Luggage</p>
        </div>
      </div>
    </div>
  );
}

export default FleetCard;
