import "./FleetCard.css";
// import seats from "../../"

function FleetCard({ image, category, brand }) {
  return (
    <div className="fleetCard">
      <img className="fleetCard--img" src={image} alt="car image" />
      <div className="fleetCard--content">
        <h4 className="fleetCard--content__header">{category}</h4>
        <p className="fleetCard--content__subHeader">{brand}</p>
        <p className="feetCard--content__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          repellendus quisquam earum sunt autem laborum, mollitia officia
          dolorum reiciendis vitae esse ut atque. Harum, fugiat.
        </p>
      </div>
      <div className="fleetCard--icons">
        <div className="fleetCard--icons__icon">
          <img src="" alt="" />
          <p>4 Seats</p>
        </div>
        <div className="fleetCard--icons__icon">
          <img src="" alt="" />
          <p>2 Luggage</p>
        </div>
      </div>
    </div>
  );
}

export default FleetCard;
