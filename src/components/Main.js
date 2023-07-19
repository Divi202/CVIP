import React, { useState } from "react";
import Tasks from "./Tasks";

export default function Main() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    if (text !== "") {
      setTasks((prevTasks) => [...prevTasks, text]);
      setText(""); // Clear the input field
    }
  };

  return (
    <section className="gradient-custom">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-12">
            <div className="card">
              <div className="card-body p-5">
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      value={text}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label my-2" htmlFor="form2">
                      <h6>New Task</h6>
                    </label>
                    <br />
                    <center>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg ms-2"
                      >
                        Add
                      </button>
                    </center>
                  </div>
                </form>
                <hr />
                <div className="my-2" id="addtasks">
                  {tasks.map((task, index) => (
                    <Tasks key={index} td={task} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
