import Cart from "./Cart";
import Category from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Women.css"; // Import external CSS file used women css

export default function Men() {
  return (
    <>
      <Navbar />
      <Cart />
      <h1 className="women-heading">Men</h1>
      <Category categoryName="Men" />
      <Footer />
    </>
  );
}
