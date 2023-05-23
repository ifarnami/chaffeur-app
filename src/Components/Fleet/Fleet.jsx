import "./Fleet.css";
import FleetCard from "./FleetCard";

function Fleet() {
  return (
    <section className="fleet">
      <h3>Fleet</h3>
      <FleetCard
        image={""}
        category={"FIRST CLASS"}
        brand={"Mercedes maybach S600"}
      />
    </section>
  );
}

export default Fleet;
