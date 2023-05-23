import "./About.css";
import driver from "../../assets/driver-about.jpg";
// import "../../../node_modules/uikit/dist/css/uikit.css";


function About() {
  return (
    <section className="about flex-center-between">
      <div className="about--media">
        <img className="about--media__img" src={driver} alt="driver" />
      </div>

      <article className="about--content">
        <h2 className="about--content__header">About</h2>
        <p className="about--content__paragraph">
          We are known for luxurious and <br /> premium chaffeur services
          worldwide. We are simply the best you can find. <br /> <br /> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Soluta ipsum sed
          perferendis quibusdam commodi doloribus veniam eos sint ex aliquam
          exercitationem magni libero, dicta amet, temporibus fugiat illum
          dolorem adipisci. <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Voluptatibus asperiores, ratione, harum labore modi tempore
          culpa obcaecati non recusandae a id, ex molestias? Ipsa est
          repudiandae cum pariatur, quo eos!
        </p>
      </article>
    </section>
  );
}

export default About;
