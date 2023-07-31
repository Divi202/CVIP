import SmallCartItem from "./SmallCartItem";
import "./Cart.css";

export default function Cart() {
  const cartStatus = "Empty";
  return (
    <>
      <div
        className="cart-offcanvas offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          {cartStatus === "Empty" ? (
            <h6 className="empty-cart-msg">Cart is {cartStatus}</h6>
          ) : (
            <table className="cart-items-table">
              <tbody>
                <SmallCartItem
                  imgsrc="src\images\men\pexels-mart-production-9558233.jpg"
                  itemname="Mark"
                  price="Otto"
                />
              </tbody>
            </table>
          )}
        </div>

        {cartStatus === "Empty" ? (
          <button className="btn btn-dark mx-3 my-3">Continue Shopping</button>
        ) : (
          <>
            <button className="btn btn-dark mx-3 cart-view-btn">
              View Cart
            </button>
            <button className="btn btn-dark mx-3 my-3 cart-checkout-btn">
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}
