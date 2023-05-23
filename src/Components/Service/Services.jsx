import Card from "../Card/Card";
import "./Services.css";
import star from "../../assets/star-services.svg";
import person from "../../assets/diamond-services.svg";
import diamond from "../../assets/diamond-services.svg";

function Services() {
  return (
    <section id="services-page" className="services">
      <h3 className="services--header">Services</h3>
      <div className="services--content">
        <Card image={star} />
        <Card image={person} />
      <Card image={diamond} />
      </div>
    </section>
  );
}
export default Services;
