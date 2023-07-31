import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";
import Cart from "./Cart";

function Contact() {
  return (
    <>
      <Navbar />
      <Cart />
      <div className="text-center">
        <h1 className="contact-heading">Contact</h1>
        <p className="contact-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Repellat unde quam exercitationem obcaecati neque omnis ratione sint
          odio sunt porro!
        </p>
      </div>
      <div className="custom-container mt-5">
        <div className="custom-row">
          <div className="custom-col">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptatem pariatur, accusantium mollitia illo quaerat.
            </p>
            <h6>
              <i className="bi bi-geo-alt-fill"></i>&nbsp; B-60 Rajhans Vihar,
              New Delhi, 110059
            </h6>
            <h6>
              <i className="bi bi-envelope-fill"></i> &nbsp; contact@info.com
            </h6>
            <h6>
              <i className="bi bi-telephone-fill"></i> &nbsp;+91 87456 7890
            </h6>
          </div>
          <div className="custom-col">
            <form>
              <input
                type="text"
                className="custom-input"
                placeholder="First name"
                aria-label="First name"
                required
              />
              <input
                type="text"
                className="custom-input"
                placeholder="Last name"
                aria-label="Last name"
                required
              />
              <input
                type="email"
                className="custom-input mt-3"
                id="inputEmail"
                placeholder="Your Email Address..."
                required
              />
              <textarea
                className="custom-textarea mt-3"
                aria-label="With textarea"
                id="inputText"
                rows={5}
                placeholder="Message.."
                required
              ></textarea>
              <button className="custom-btn mt-3" id="BtnSend">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
