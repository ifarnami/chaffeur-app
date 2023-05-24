import "./Fleet.css";
import FleetCard from "./FleetCard";
import maybakh from "../../assets/sedan-fleet.png";
import wagon from "../../assets/waggen-fleet.png";
import suv from "../../assets/suv-fleet.png";

function Fleet() {
  return (
    <section id="fleet-page" className="fleet flex-center-center">
      <h3 className="fleet--header">Fleet</h3>
      <div className="fleet--content flex-center-center">
        <FleetCard
          image={maybakh}
          category={"FIRST CLASS"}
          brand={"Mercedes maybach S600"}
        />
        <FleetCard
          image={wagon}
          category={"BUSINESS CLASS"}
          brand={"Mercedes G - Wagon"}
        />
        <FleetCard image={suv} category={"SUV"} brand={"Mercedes M Class"} />
      </div>
    </section>
  );
}

export default Fleet;
