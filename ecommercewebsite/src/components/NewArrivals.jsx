import React from "react";
import Button from "./Button";
import "./NewArrivals.css";

export default function NewArrivals() {
  return (
    <div className="container my-5">
      <div className="row navrow">
        <div className="col-8 colContent">
          <h1 className="arrivals-title">
            New
            <br />
            Arrivals
          </h1>
        </div>
        <div className="col-4">
          <div className="imgContainer">
            <img
              className="imgstyle1"
              src="src\images\men\pexels-mart-production-9558233.jpg"
              alt="Men"
            />
          </div>
        </div>
      </div>
      <div className="row navrow">
        <div className="col-4">
          <div className="imgContainer">
            <img
              className="imgstyle1"
              src="src\images\front_img.jpg"
              alt="Women"
            />
          </div>
        </div>
        <div className="col-8 colContent">
          <h6 className="arrivals-desc">Men and Women</h6>
          <h1 className="arrivals-title">Spring Summer Collection</h1>
          <p className="arrivals-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            voluptates eveniet. Modi dolorum reprehenderit architecto molestias,
            ipsam fugiat officiis sint, dignissimos totam earum ipsa delectus.
          </p>
          <div className="btn-wrapper">
            <Button btnName="Shop Collection" />
          </div>
        </div>
      </div>
    </div>
  );
}
