import "./Info.css";

function Info() {
  return(
    <section className="info">
      <div className="info--content">
        <h4 className="info--content__number">70</h4>
        <h4 className="info--content__description">VEHICLES</h4>
      </div>
      <div className="info--content">
        <h4 className="info--content__number">576</h4>
        <h4 className="info--content__description">TRIPS DONE</h4>
      </div>
      <div className="info--content">
        <h4 className="info--content__number">321</h4>
        <h4 className="info--content__description">EVENTS</h4>
      </div>
    </section>
  );
}

export default Info;
