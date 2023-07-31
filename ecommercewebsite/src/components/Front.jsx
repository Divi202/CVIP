import "./Front.css";
import Button from "./Button";

export default function Front() {
  return (
    <div id="frontstyle">
      <div className="front-row">
        <div className="front-content">
          <div>
            <p>Women</p>
            <h1>
              Slick. Modern. <br />
              Awesome.
            </h1>
            <div id="btn-wrapper">
              <Button btnName="Shop Online" />
            </div>
          </div>
        </div>
        <div>
          <img
            src="src/images/women/pexels-mart-production-9558900.jpg"
            id="frontimg"
            alt="Women"
          />
        </div>
      </div>
    </div>
  );
}
