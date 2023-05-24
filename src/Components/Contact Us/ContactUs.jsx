import "./ContactUs.css";

const clickHandler = (e) => {
  e.preventDefault();
};

function ContactUs() {
  return (
    <section id="contact" className="contact flex-center-center">
      <p className="contact--title">Contact</p>

      <form action="submit" className="contact--form flex-center-center">
        <input
          className="contact--form__text"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="contact--form__text"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="contact--form__text"
          type="text"
          name="type"
          placeholder="Type of Car"
        />
        <input
          className="contact--form__textarea"
          type="text"
          name="details"
          placeholder="Your Details"
        ></input>
        <button onClick={clickHandler} className="contact--form__btn">
          SEND
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
