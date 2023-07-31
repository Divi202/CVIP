import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Front from "./components/Front.jsx";
import Collection from "./components/Collection";
import NewArrivals from "./components/NewArrivals";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Front />
      <h6 className="SC mt-3">Summer Collection</h6>
      <h2 className="SC">Popular T-Shirt</h2>
      <Collection />
      <NewArrivals />
      <Offer />\
      <div className="container">
        <h1 className="text-center">Reviews</h1>
        {/* 1st row */}
        <div className="row">
          <div className="col-6">
            <Reviews
              review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        cupiditate vitae, blanditiis quas voluptate minus tempore a voluptatibus
        recusandae nemo veniam facilis minima dicta est iusto nesciunt et quae
        non."
              customerName="Divya"
            />
          </div>
          <div className="col-6">
            <Reviews
              review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        cupiditate vitae, blanditiis quas voluptate minus tempore a voluptatibus
        recusandae nemo veniam facilis minima dicta est iusto nesciunt et quae
        non."
              customerName="Arun kumar"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="row">
          <div className="col-6">
            <Reviews
              review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        cupiditate vitae, blanditiis quas voluptate minus tempore a voluptatibus
        recusandae nemo veniam facilis minima dicta est iusto nesciunt et quae
        non."
              customerName="Abhishek Rana"
            />
          </div>
          <div className="col-6">
            <Reviews
              review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        cupiditate vitae, blanditiis quas voluptate minus tempore a voluptatibus
        recusandae nemo veniam facilis minima dicta est iusto nesciunt et quae
        non."
              customerName="Amrita Singh"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
