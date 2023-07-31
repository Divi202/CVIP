import Cart from "./Cart";
import Category from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Women.css"; // Import external CSS file

export default function Women() {
  return (
    <>
      <Navbar />
      <Cart />
      <h1 className="women-heading">Women</h1>
      <Category categoryName="Women" />
      <Footer />
    </>
  );
}
