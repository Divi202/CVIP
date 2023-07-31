import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Checkout.css";
import Button from "./Button";
import ChkCart from "./ChkCart";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <h1 className="my-5 mx-5 cart-heading">Checkout</h1>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3 className="my-4"> Customer Information</h3>
            <form style={{ width: "50em" }}>
              <input
                type="email"
                className="form-control"
                id="usernameEmail"
                placeholder="Email Address*"
                required
              />

              {/* Billing Details  */}
              <h3 className="mt-4">Billing Details</h3>

              {/* First name  */}
              <input
                type="text"
                className="form-control mt-4"
                id="firstName"
                required
                placeholder="First name*"
              />
              {/* Last name  */}
              <input
                type="text"
                className="form-control mt-3"
                id="lastName"
                required
                placeholder="Last name*"
              />
              {/* Country  */}
              <select
                className="form-select mt-3 "
                id="country"
                required
                aria-label="select example"
                placeholder="Country*"
              >
                <option value="">India</option>
                <option value="1">United State</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {/* House number and street name  */}
              <input
                type="text"
                className="form-control mt-3"
                id="houseNoAndStreetName"
                required
                placeholder="House number and street name*"
              />
              {/* Apartment, Suit, Unit etc  */}
              <input
                type="text"
                className="form-control mt-3"
                id="apartmentOptional"
                required
                placeholder="Apartment, Suit, Unit etc, (Optional)*"
              />
              {/* Town/City  */}
              <input
                type="text"
                className=" form-control mt-3"
                id="townCity"
                placeholder="Town / City *"
              />
              {/* State  */}
              <select
                className="form-select mt-3"
                required
                aria-label="select example"
                placeholder="State*"
                id="state"
                tabIndex="-1"
              >
                <option value="">New Delhi</option>
                <option value="1">Mumbai</option>
                <option value="2">Uttar Pardesh</option>
                <option value="3">Haryana</option>
              </select>
              {/* Zip Code  */}
              <input
                type="number"
                className=" form-control mt-3 "
                id="zipCode"
                placeholder="Zip Code *"
                required
              />
              {/* Phone Number  */}
              <input
                type="number"
                className=" form-control mt-3 "
                id="phoneNo"
                placeholder="Phone number*"
                required
              />

              <h3 className="mt-4">Additional Details</h3>

              <textarea
                className="form-control mt-4"
                aria-label="With textarea"
                id="additionalDetails"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
              <br />
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="#handleCoupon"
                id="couponlink"
              >
                Have a Coupon?
              </a>
              <div id="#handleCoupon">
                {/* Text area for coupon code  */}
                <input
                  type="text"
                  className="form-control mt-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
                <div id="appluBtn" className="mt-3">
                  {/* Apply Button  */}
                  <Button btnName="Apply" />
                </div>
              </div>
              {/** Payment Method Selection **/}
              <h3 className="mt-4">Payment</h3>
              <p className="mt-4" style={{ marginLeft: "2em", width: "46em " }}>
                Sorry, it seems that there are no available payment methods for
                your state. Please contact us if you require assistance or wish
                to make alternate arrangements.
              </p>
              <div className="mt-4 ">
                <Button
                  style={{ width: "48em", height: "4em", marginTop: "1em" }}
                  btnName=" &nbsp;Place Order"
                  btnClasses="bi bi-bag-fill btnPlaceOrder"
                  addIcon="true"
                />
                {/* <button
                  className="btn btn-dark"
                  style={{ width: "48em", height: "4em", marginTop: "1em" }}
                >
                  {" "}
                  &nbsp;Place Order
                </button> */}
              </div>
            </form>
          </div>

          <div className="col-4">
            {" "}
            {/* Your Order Preview  */}
            <h3>Your Order</h3>
            <table className="custom-table ms-2">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <ChkCart
                  imgsrc=""
                  itemname="T-shirt1"
                  price="200"
                  color="blue"
                />
                <tr>
                  <th scope="row">Subtotal</th>
                  <td>200</td>
                </tr>
                <tr>
                  <th scope="row">Total</th>
                  <td>200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
