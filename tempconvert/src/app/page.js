"use client";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [inputTemp, setInputTemp] = useState(0);
  const [outputTemp, setOutputTemp] = useState(32);
  const [inputTempScale, setInputTempScale] = useState("Celsius");
  const [outputTempScale, setOutputTempScale] = useState("Fahrenheit");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputTemp(inputValue);
  };

  const handleInSelect = (e) => {
    const tempScale = e.target.value;
    if (tempScale === outputTempScale) {
      alert("Alert! Both input and output temperature scale can't be the same");
    } else {
      setInputTempScale(tempScale);
    }
  };

  const handleOutSelect = (e) => {
    const tempScale = e.target.value;
    if (tempScale === inputTempScale) {
      alert("Alert! Both input and output temperature scale can't be the same");
    } else {
      setOutputTempScale(tempScale);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = outputTemp;

    if (inputTempScale === "Celsius") {
      switch (outputTempScale) {
        case "Fahrenheit":
          temp = (inputTemp * 9) / 5 + 32;
          break;
        case "Kelvin":
          temp = inputTemp + 273.15;
          break;
        default:
          alert("Input temperature is already in Celsius");
      }
    } else if (inputTempScale === "Fahrenheit") {
      switch (outputTempScale) {
        case "Celsius":
          temp = ((inputTemp - 32) * 5) / 9;
          break;
        case "Kelvin":
          temp = ((inputTemp - 32) * 5) / 9 + 273.15;
          break;
        default:
          alert("Input temperature is already in Fahrenheit");
      }
    } else {
      switch (outputTempScale) {
        case "Celsius":
          temp = inputTemp - 273.15;
          break;
        case "Fahrenheit":
          temp = ((inputTemp - 273.15) * 9) / 5 + 32;
          break;
        default:
          alert("Input temperature is already in Kelvin");
      }
    }

    setOutputTemp(Math.round(temp));
    setIsButtonClicked(true);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.maindiv}>
          <input
            type="number"
            className={`form-control ${styles.inputtemp}`}
            aria-describedby="inputtemp"
            value={inputTemp}
            onChange={handleChange}
          ></input>
          <input
            type="number"
            className={`form-control ${styles.inputtemp}`}
            aria-describedby="outputtemp"
            value={outputTemp}
            disabled
          ></input>
          <div>
            <label className={styles.labelinputtemp}>From:</label>
            <select
              onChange={handleInSelect}
              className={`form-select ${styles.inputselect}`}
              aria-label="fromtemp"
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
            </select>
            <label className={styles.labeloutputtemp}>To:</label>
            <select
              onChange={handleOutSelect}
              className={`form-select ${styles.outputselect}`}
              aria-label="fromtemp"
            >
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Celsius">Celsius</option>
              <option value="Kelvin">Kelvin</option>
            </select>
          </div>
          <button className={`btn btn-danger mt-3 ${styles.btnconvert}`}>
            Convert
          </button>
          {isButtonClicked && (
            <h4 className={`text-center ${styles.result}`}>
              {inputTemp} {inputTempScale} = {outputTemp} {outputTempScale}
            </h4>
          )}
        </div>
      </form>
      <footer>
        <div className={styles.footer}>
          <h3> Made by Divya</h3>
        </div>
      </footer>
    </main>
  );
}
