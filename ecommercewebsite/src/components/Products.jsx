import { useNavigate } from "react-router-dom";
import Collection from "./Collection";
import ButtonIncDec from "./buttonIncDec";
import { useState } from "react";

export default function Products(props) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showViewCart, setShowViewCart] = useState(false);
  const [btnName, setBtnName] = useState("Add to Cart");
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  function handleColorSelection(color) {
    setSelectedColor(color);
  }
  function handleAddToCart() {
    if (selectedColor) {
      setShowViewCart(true);
    } else {
      // If color is not selected, show an error message
      alert("Please select a color before adding to cart.");
    }
    setBtnName(selectedColor ? " Add to Cart ✓" : "Add to Cart");
  }
  function handleViewCart() {
    if (selectedColor) {
      // Create a new item object to add to the cart
      const newItem = {
        id: props.id,
        color: selectedColor,
      };

      // Add the new item to the cart
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);

      // Redirect to the cart page after adding the item to the cart

      navigate("/fullcart", {
        state: { item: newItem, productDetails: props },
      });
    }
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-6">
            <img
              src={props.imgsrc}
              alt=""
              style={{ width: "35em", height: "40em" }}
            />
          </div>
          <div className="col-6 ">
            <h6 style={{ color: "#c4b7b7" }}>{props.category}</h6>
            <h5>{props.name}</h5>
            <h6 style={{ color: "grey" }} className="card-text">
              &#8377;{props.price}
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quibusdam sed vero, provident nostrum cum unde. Optio
              nemo rerum voluptatum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam, non?
            </p>
            <h6 className="py-2">Color</h6>
            <button
              type="button"
              className={`btn btn-outline-primary mx-1 ${
                selectedColor === "blue" ? "active" : ""
              }`}
              onClick={() => handleColorSelection("blue")}
            >
              Blue
            </button>
            <button
              type="button"
              className={`btn btn-outline-danger mx-1 ${
                selectedColor === "red" ? "active" : ""
              }`}
              onClick={() => handleColorSelection("red")}
            >
              Red
            </button>
            <button
              type="button"
              className={`btn btn-outline-success mx-1 ${
                selectedColor === "green" ? "active" : ""
              }`}
              onClick={() => handleColorSelection("green")}
            >
              Green
            </button>
            <hr className="mt-5" />
            {/* Button to increase and decrease the items  */}
            <ButtonIncDec />

            {/* Add to Cart button  */}
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={handleAddToCart}
            >
              {btnName}
            </button>
            {showViewCart && (
              <button
                type="button"
                onClick={handleViewCart}
                className="btn btn-secondary mx-2"
              >
                View Cart
              </button>
            )}
            {/* Used Accordian for displaying additional details of the product  */}
            <hr className="mt-3" />
            <div className="accordion my-3" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <strong> Desciption</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <h6>ABOUT THE PRODUCT </h6>
                    <p>
                      Our T-Shirts are lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo.
                    </p>{" "}
                    <ul>
                      <li>100% Cotton </li>
                      <li>260gsm </li>
                      <li>Breathable Fabric</li>
                    </ul>
                    <hr className="py-2" />
                    <h6>SIZE & FIT</h6>
                    <ul>
                      <li>Model is wearing size M and is 6&apos;1&quot;</li>
                      <li>Standard fit for a relaxed, easy feel</li>
                    </ul>
                    <hr className="py-2" />
                    <h6>FREE DELIVERY & RETURNS</h6>
                    <p>Free standard delivery on orders over $60.</p>
                    <ul>
                      <li>
                        You can return your order for any reason, free of
                        charge, within 30 days
                      </li>
                      <li> We also offer a Free-of-Charge shipping label</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <strong> Additional Information</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <table className="table border">
                      {/* <thead>
                        <tr>
                          <th>dfas</th>
                          <th> aff</th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr>
                          <td className="border">Color</td>
                          <td>Blue,Red,Green</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <h1>Related Products</h1>
        </div>
        <Collection />
      </div>
    </>
  );
}
