import Copywrite from "./Copywrite";
import NavbarItems from "./NavbarItems";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container mt-5 py-5 footer">
        <center>
          <h1 className="py-3">Subscribe To Get Offers In Your Inbox</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form>
            <input
              className="form-control"
              type="email"
              placeholder="Your Email Address..."
              aria-label="Email Address"
              size={20}
              required
            ></input>
            <button className="btn btn-dark mx-3"> Subscribe</button>
          </form>
          <ul className="nav justify-content-center py-3 ">
            <NavbarItems itemName="Home" address="/home" />
            <NavbarItems itemName="Men" address="/men" />
            <NavbarItems itemName="Women" address="/women" />
            <NavbarItems itemName="Contact" address="/contact" />
          </ul>
        </center>
      </div>
      <Copywrite year="2023" />
    </>
  );
}
