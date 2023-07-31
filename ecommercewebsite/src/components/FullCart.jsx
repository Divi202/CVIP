import Button from "./Button";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import "./FullCart.css"; // Import external CSS file
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function FullCart() {
  // Get the location object using useLocation hook
  const location = useLocation();
  const navigate = useNavigate();

  // Access the passed state from the location object

  const { item, productDetails } = location.state ?? {};

  function handleClick() {
    console.log("proceed to chk");
    navigate("/chk", {
      state: { addedItem: item, itemDetails: productDetails },
    });
  }

  return (
    <>
      <Navbar />
      <h1 className="cart-heading mx-5">Cart</h1>
      <div className="custom-container">
        <div className="custom-row">
          {!item || !productDetails ? (
            <div className="col-12">
              <h3 className="text-center">Cart is empty</h3>
            </div>
          ) : (
            <>
              <div className="col-8">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem
                      color={item.color}
                      imgsrc={productDetails.imgsrc}
                      itemname={productDetails.name}
                      price={productDetails.price}
                      quantity="1"
                      subtotal={productDetails.price}
                    />
                  </tbody>
                </table>
              </div>
              <div className="col-4 ">
                <table className="custom-table ms-2">
                  <thead>
                    <tr>
                      <th scope="col">Cart Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Subtotal</th>
                      <td>{productDetails.price}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td>{productDetails.price}</td>
                    </tr>
                    <tr>
                      <td>
                        <Button
                          btnName="Proceed to checkout"
                          onClick={handleClick}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FullCart;
