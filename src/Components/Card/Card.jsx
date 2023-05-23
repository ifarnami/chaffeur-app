import "./Card.css";
// import star from "../../assets/star-services.svg"

function Card({ image }) {
  return (
    <div className="card">
      <img className="card--img" src={image} alt="image" />
      <h3 className="card--header">Lorem ipsum dolor sit amet</h3>
      <p className="card--paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
        quod eum at quae voluptatum eos quidem! <br /> <br /> Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Vel voluptatum labore placeat
        eaque voluptate blanditiis dignissimos, tempora esse facere sequi, ex
        maiores?
      </p>
    </div>
  );
}

export default Card;
