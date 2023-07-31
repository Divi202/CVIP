import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarItems from "./NavbarItems.jsx";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TeeFusion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavbarItems itemName="Home" address="/home" />
              <NavbarItems itemName="Men" address="/men" />
              <NavbarItems itemName="Women" address="/women" />
              <NavbarItems itemName="Contact" address="/contact" />
              <div className="pos">
                <NavbarItems itemName="Cart" address="/fullcart" />
              </div>
              <div>
                <NavbarItems itemName="Log In" address="" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
